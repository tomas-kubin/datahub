#!/bin/bash

set -e

: ${DATAHUB_ANALYTICS_ENABLED:=true}
: ${USE_AWS_ELASTICSEARCH:=false}

# protocol: http or https?
if [[ $ELASTICSEARCH_USE_SSL == true ]]; then
    ELASTICSEARCH_PROTOCOL=https
else
    ELASTICSEARCH_PROTOCOL=http
fi
echo -e "going to use $ELASTICSEARCH_PROTOCOL"

# Elasticsearch URL to be suffixed with a resource address
ELASTICSEARCH_URL="$ELASTICSEARCH_PROTOCOL://$ELASTICSEARCH_HOST:$ELASTICSEARCH_PORT"

# set auth header if none is given
if [[ -z $ELASTICSEARCH_AUTH_HEADER ]]; then
  if [[ ! -z $ELASTICSEARCH_USERNAME ]]; then
    # no auth header given, but username is defined -> use it to create the auth header
    AUTH_TOKEN=$(echo -ne "$ELASTICSEARCH_USERNAME:$ELASTICSEARCH_PASSWORD" | base64 --wrap 0)
    ELASTICSEARCH_AUTH_HEADER="Authorization:Basic $AUTH_TOKEN"
    echo -e "going to use elastic headers based on username and password"
  else
    # no auth header or username given -> use default auth header
    ELASTICSEARCH_AUTH_HEADER="Accept: */*"
    echo -e "going to use default elastic headers"
  fi
fi

# index prefix used throughout the script
echo -e "going to use prefix $INDEX_PREFIX"
if [[ -z "$INDEX_PREFIX" ]]; then
  PREFIX=''
else
  PREFIX="${INDEX_PREFIX}_"
fi

# path where index definitions are stored
INDEX_DEFINITIONS_ROOT=/index/usage-event


# check Elasticsearch for given index/resource (first argument)
# if it doesn't exist (http code 404), use the given file (second argument) to create it
function create_if_not_exists {
  RESOURCE_ADDRESS="$1"
  RESOURCE_DEFINITION_NAME="$2"

  # query ES to see if the resource already exists
  RESOURCE_STATUS=$(curl -o /dev/null -s -w "%{http_code}\n" --header "$ELASTICSEARCH_AUTH_HEADER" "$ELASTICSEARCH_URL/$RESOURCE_ADDRESS")

  if [ $RESOURCE_STATUS -eq 200 ]; then
    # resource already exists -> nothing to do
    echo -e "\n>>> $RESOURCE_ADDRESS already exists ✓"

  elif [ $RESOURCE_STATUS -eq 404 ]; then
    # resource doesn't exist -> need to create it
    echo -e "\n>>> creating $RESOURCE_ADDRESS ..."
    # use the given path as definition, but first replace all occurences of PREFIX within the file with the actual prefix
    TMP_SOURCE_PATH="/tmp/$RESOURCE_DEFINITION_NAME"
    sed -e "s/PREFIX/$PREFIX/g" "$INDEX_DEFINITIONS_ROOT/$RESOURCE_DEFINITION_NAME" | tee -a "$TMP_SOURCE_PATH"
    curl -s -XPUT --header "$ELASTICSEARCH_AUTH_HEADER" "$ELASTICSEARCH_URL/$RESOURCE_ADDRESS" -H 'Content-Type: application/json' --data "@$TMP_SOURCE_PATH"

  else
    echo -e "\n>>> failed to GET $RESOURCE_ADDRESS ($RESOURCE_STATUS) !"

    # when `USE_AWS_ELASTICSEARCH` was forgotten to be set to `true` when running against AWS ES OSS,
    # this script will use wrong paths (e.g. `_ilm/policy/` instead of AWS-compatible `_opendistro/_ism/policies/`)
    # and the ES endpoint will return `401 Unauthorized` or `405 Method Not Allowed`
    # let's use this as chance to point that wrong config might be used!
    if [ $RESOURCE_STATUS -eq 401 ] || [ $RESOURCE_STATUS -eq 405 ]; then
      if [[ $USE_AWS_ELASTICSEARCH == false ]] && [[ $ELASTICSEARCH_URL == *"amazonaws"* ]]; then
        echo "... looks like AWS OpenSearch is used; please set USE_AWS_ELASTICSEARCH env value to true"
      fi
    fi

    exit 1
  fi
}

# create indices for ES (non-AWS)
function create_datahub_usage_event_datastream() {
  # non-AWS env requires creation of two resources for Datahub usage events:
  #   1. ILM policy
  create_if_not_exists "_ilm/policy/${PREFIX}datahub_usage_event_policy" policy.json
  #   2. index template
  create_if_not_exists "_index_template/${PREFIX}datahub_usage_event_index_template" index_template.json
}

# create indices for ES OSS (AWS)
function create_datahub_usage_event_aws_elasticsearch() {
  # AWS env requires creation of three resources for Datahub usage events:
  #   1. ISM policy
  create_if_not_exists "_opendistro/_ism/policies/${PREFIX}datahub_usage_event_policy" aws_es_ism_policy.json

  #   2. index template
  create_if_not_exists "_template/${PREFIX}datahub_usage_event_index_template" aws_es_index_template.json

  #   3. event index datahub_usage_event-000001
  #     (note that AWS *rollover* indices need to use `^.*-\d+$` naming pattern)
  #     -> https://aws.amazon.com/premiumsupport/knowledge-center/opensearch-failed-rollover-index/
  INDEX_SUFFIX="000001"
  #     ... but first check whether `datahub_usage_event` wasn't already autocreated by GMS before `datahub_usage_event-000001`
  #     (as is common case when this script was initially run without properly setting `USE_AWS_ELASTICSEARCH` to `true`)
  #     -> https://github.com/datahub-project/datahub/issues/5376
  USAGE_EVENT_STATUS=$(curl -o /dev/null -s -w "%{http_code}\n" --header "$ELASTICSEARCH_AUTH_HEADER" "$ELASTICSEARCH_URL/${PREFIX}datahub_usage_event")
  if [ $USAGE_EVENT_STATUS -eq 200 ]; then
    USAGE_EVENT_DEFINITION=$(curl -s --header "$ELASTICSEARCH_AUTH_HEADER" "$ELASTICSEARCH_URL/${PREFIX}datahub_usage_event")
    # the definition is expected to contain "datahub_usage_event-000001" string
    if [[ $USAGE_EVENT_DEFINITION != *"datahub_usage_event-$INDEX_SUFFIX"* ]]; then
      # ... if it doesn't, we need to drop it
      echo -e "\n>>> deleting invalid datahub_usage_event ..."
      curl -s -XDELETE --header "$ELASTICSEARCH_AUTH_HEADER" "$ELASTICSEARCH_URL/${PREFIX}datahub_usage_event"
      # ... and then recreate it below
    fi
  fi

  #   ... now we are safe to create the index
  create_if_not_exists "${PREFIX}datahub_usage_event-$INDEX_SUFFIX" aws_es_index.json
}

if [[ $DATAHUB_ANALYTICS_ENABLED == true ]]; then
  if [[ $USE_AWS_ELASTICSEARCH == false ]]; then
    create_datahub_usage_event_datastream || exit 1
  else
    create_datahub_usage_event_aws_elasticsearch || exit 1
  fi
fi
