"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9637],{4137:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3058:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=t(7462),o=t(3366),r=(t(7294),t(4137)),i=["components"],s={sidebar_position:17,title:"MlModelGroup",sidebar_label:"MlModelGroup",slug:"/generated/metamodel/entities/mlmodelgroup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/mlModelGroup.md"},l="MlModelGroup",c={unversionedId:"docs/generated/metamodel/entities/mlModelGroup",id:"docs/generated/metamodel/entities/mlModelGroup",isDocsHomePage:!1,title:"MlModelGroup",description:"Aspects",source:"@site/genDocs/docs/generated/metamodel/entities/mlModelGroup.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/mlmodelgroup",permalink:"/docs/generated/metamodel/entities/mlmodelgroup",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/mlModelGroup.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17,title:"MlModelGroup",sidebar_label:"MlModelGroup",slug:"/generated/metamodel/entities/mlmodelgroup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/mlModelGroup.md"},sidebar:"overviewSidebar",previous:{title:"MlModel",permalink:"/docs/generated/metamodel/entities/mlmodel"},next:{title:"MlFeatureTable",permalink:"/docs/generated/metamodel/entities/mlfeaturetable"}},d=[{value:"Aspects",id:"aspects",children:[{value:"mlModelGroupKey",id:"mlmodelgroupkey",children:[],level:3},{value:"mlModelGroupProperties",id:"mlmodelgroupproperties",children:[],level:3},{value:"ownership",id:"ownership",children:[],level:3},{value:"status",id:"status",children:[],level:3},{value:"deprecation",id:"deprecation",children:[],level:3},{value:"browsePaths",id:"browsepaths",children:[],level:3},{value:"globalTags",id:"globaltags",children:[],level:3},{value:"dataPlatformInstance",id:"dataplatforminstance",children:[],level:3},{value:"glossaryTerms",id:"glossaryterms",children:[],level:3},{value:"editableMlModelGroupProperties",id:"editablemlmodelgroupproperties",children:[],level:3},{value:"domains",id:"domains",children:[],level:3}],level:2},{value:"Relationships",id:"relationships",children:[{value:"Outgoing",id:"outgoing",children:[],level:3},{value:"Incoming",id:"incoming",children:[],level:3}],level:2},{value:"Global Metadata Model",id:"global-metadata-model",children:[],level:2}],m={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mlmodelgroup"},"MlModelGroup"),(0,r.kt)("h2",{id:"aspects"},"Aspects"),(0,r.kt)("h3",{id:"mlmodelgroupkey"},"mlModelGroupKey"),(0,r.kt)("p",null,"Key for an ML model group"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "mlModelGroupKey"\n  },\n  "name": "MLModelGroupKey",\n  "namespace": "com.linkedin.metadata.key",\n  "fields": [\n    {\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "platform",\n      "doc": "Standardized platform urn for the model group"\n    },\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "enableAutocomplete": true,\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "Name of the MLModelGroup"\n    },\n    {\n      "Searchable": {\n        "fieldType": "TEXT_PARTIAL",\n        "queryByDefault": false\n      },\n      "type": {\n        "type": "enum",\n        "symbolDocs": {\n          "CORP": "Designates corporation fabrics",\n          "DEV": "Designates development fabrics",\n          "EI": "Designates early-integration fabrics",\n          "NON_PROD": "Designates non-production fabrics",\n          "PRE": "Designates pre-production fabrics",\n          "PROD": "Designates production fabrics",\n          "QA": "Designates quality assurance fabrics",\n          "STG": "Designates staging fabrics",\n          "TEST": "Designates testing fabrics",\n          "UAT": "Designates user acceptance testing fabrics"\n        },\n        "name": "FabricType",\n        "namespace": "com.linkedin.common",\n        "symbols": [\n          "DEV",\n          "TEST",\n          "QA",\n          "UAT",\n          "EI",\n          "PRE",\n          "STG",\n          "NON_PROD",\n          "PROD",\n          "CORP"\n        ],\n        "doc": "Fabric group type"\n      },\n      "name": "origin",\n      "doc": "Fabric type where model group belongs to or where it was generated"\n    }\n  ],\n  "doc": "Key for an ML model group"\n}\n'))),(0,r.kt)("h3",{id:"mlmodelgroupproperties"},"mlModelGroupProperties"),(0,r.kt)("p",null,"Properties associated with an ML Model Group"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "mlModelGroupProperties"\n  },\n  "name": "MLModelGroupProperties",\n  "namespace": "com.linkedin.ml.metadata",\n  "fields": [\n    {\n      "Searchable": {\n        "/*": {\n          "queryByDefault": true\n        }\n      },\n      "type": {\n        "type": "map",\n        "values": "string"\n      },\n      "name": "customProperties",\n      "default": {},\n      "doc": "Custom property bag."\n    },\n    {\n      "Searchable": {\n        "fieldType": "TEXT",\n        "hasValuesFieldName": "hasDescription"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Documentation of the MLModelGroup"\n    },\n    {\n      "type": [\n        "null",\n        "long"\n      ],\n      "name": "createdAt",\n      "default": null,\n      "doc": "Date when the MLModelGroup was developed"\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "VersionTag",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "versionTag",\n              "default": null\n            }\n          ],\n          "doc": "A resource-defined string representing the resource state for the purpose of concurrency control"\n        }\n      ],\n      "name": "version",\n      "default": null,\n      "doc": "Version of the MLModelGroup"\n    }\n  ],\n  "doc": "Properties associated with an ML Model Group"\n}\n'))),(0,r.kt)("h3",{id:"ownership"},"ownership"),(0,r.kt)("p",null,"Ownership information of an entity."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "ownership"\n  },\n  "name": "Ownership",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "Owner",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "corpuser",\n                  "corpGroup"\n                ],\n                "name": "OwnedBy"\n              },\n              "Searchable": {\n                "addToFilters": true,\n                "fieldName": "owners",\n                "fieldType": "URN",\n                "filterNameOverride": "Owned By",\n                "hasValuesFieldName": "hasOwners",\n                "queryByDefault": false\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "owner",\n              "doc": "Owner URN, e.g. urn:li:corpuser:ldap, urn:li:corpGroup:group_name, and urn:li:multiProduct:mp_name\\n(Caveat: only corpuser is currently supported in the frontend.)"\n            },\n            {\n              "type": {\n                "type": "enum",\n                "symbolDocs": {\n                  "BUSINESS_OWNER": "A person or group who is responsible for logical, or business related, aspects of the asset.",\n                  "CONSUMER": "A person, group, or service that consumes the data\\nDeprecated! Use TECHNICAL_OWNER or BUSINESS_OWNER instead.",\n                  "DATAOWNER": "A person or group that is owning the data\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "DATA_STEWARD": "A steward, expert, or delegate responsible for the asset.",\n                  "DELEGATE": "A person or a group that overseas the operation, e.g. a DBA or SRE.\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "DEVELOPER": "A person or group that is in charge of developing the code\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "NONE": "No specific type associated to the owner.",\n                  "PRODUCER": "A person, group, or service that produces/generates the data\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "STAKEHOLDER": "A person or a group that has direct business interest\\nDeprecated! Use TECHNICAL_OWNER, BUSINESS_OWNER, or STEWARD instead.",\n                  "TECHNICAL_OWNER": "person or group who is responsible for technical aspects of the asset."\n                },\n                "deprecatedSymbols": {\n                  "CONSUMER": true,\n                  "DATAOWNER": true,\n                  "DELEGATE": true,\n                  "DEVELOPER": true,\n                  "PRODUCER": true,\n                  "STAKEHOLDER": true\n                },\n                "name": "OwnershipType",\n                "namespace": "com.linkedin.common",\n                "symbols": [\n                  "TECHNICAL_OWNER",\n                  "BUSINESS_OWNER",\n                  "DATA_STEWARD",\n                  "NONE",\n                  "DEVELOPER",\n                  "DATAOWNER",\n                  "DELEGATE",\n                  "PRODUCER",\n                  "CONSUMER",\n                  "STAKEHOLDER"\n                ],\n                "doc": "Asset owner types"\n              },\n              "name": "type",\n              "doc": "The type of the ownership"\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "OwnershipSource",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": {\n                        "type": "enum",\n                        "symbolDocs": {\n                          "AUDIT": "Auditing system or audit logs",\n                          "DATABASE": "Database, e.g. GRANTS table",\n                          "FILE_SYSTEM": "File system, e.g. file/directory owner",\n                          "ISSUE_TRACKING_SYSTEM": "Issue tracking system, e.g. Jira",\n                          "MANUAL": "Manually provided by a user",\n                          "OTHER": "Other sources",\n                          "SERVICE": "Other ownership-like service, e.g. Nuage, ACL service etc",\n                          "SOURCE_CONTROL": "SCM system, e.g. GIT, SVN"\n                        },\n                        "name": "OwnershipSourceType",\n                        "namespace": "com.linkedin.common",\n                        "symbols": [\n                          "AUDIT",\n                          "DATABASE",\n                          "FILE_SYSTEM",\n                          "ISSUE_TRACKING_SYSTEM",\n                          "MANUAL",\n                          "SERVICE",\n                          "SOURCE_CONTROL",\n                          "OTHER"\n                        ]\n                      },\n                      "name": "type",\n                      "doc": "The type of the source"\n                    },\n                    {\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "url",\n                      "default": null,\n                      "doc": "A reference URL for the source"\n                    }\n                  ],\n                  "doc": "Source/provider of the ownership information"\n                }\n              ],\n              "name": "source",\n              "default": null,\n              "doc": "Source information for the ownership"\n            }\n          ],\n          "doc": "Ownership information"\n        }\n      },\n      "name": "owners",\n      "doc": "List of owners of the entity."\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "lastModified",\n      "default": {\n        "actor": "urn:li:corpuser:unknown",\n        "impersonator": null,\n        "time": 0\n      },\n      "doc": "Audit stamp containing who last modified the record and when. A value of 0 in the time field indicates missing data."\n    }\n  ],\n  "doc": "Ownership information of an entity."\n}\n'))),(0,r.kt)("h3",{id:"status"},"status"),(0,r.kt)("p",null,"The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\nThis aspect is used to represent soft deletes conventionally."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "status"\n  },\n  "name": "Status",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN"\n      },\n      "type": "boolean",\n      "name": "removed",\n      "default": false,\n      "doc": "Whether the entity has been removed (soft-deleted)."\n    }\n  ],\n  "doc": "The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\\nThis aspect is used to represent soft deletes conventionally."\n}\n'))),(0,r.kt)("h3",{id:"deprecation"},"deprecation"),(0,r.kt)("p",null,"Deprecation status of an entity"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "deprecation"\n  },\n  "name": "Deprecation",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN",\n        "weightsPerFieldValue": {\n          "true": 0.5\n        }\n      },\n      "type": "boolean",\n      "name": "deprecated",\n      "doc": "Whether the entity is deprecated."\n    },\n    {\n      "type": [\n        "null",\n        "long"\n      ],\n      "name": "decommissionTime",\n      "default": null,\n      "doc": "The time user plan to decommission this entity."\n    },\n    {\n      "type": "string",\n      "name": "note",\n      "doc": "Additional information about the entity deprecation plan, such as the wiki, doc, RB."\n    },\n    {\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "actor",\n      "doc": "The user URN which will be credited for modifying this deprecation content."\n    }\n  ],\n  "doc": "Deprecation status of an entity"\n}\n'))),(0,r.kt)("h3",{id:"browsepaths"},"browsePaths"),(0,r.kt)("p",null,"Shared aspect containing Browse Paths to be indexed for an entity."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "browsePaths"\n  },\n  "name": "BrowsePaths",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "/*": {\n          "fieldName": "browsePaths",\n          "fieldType": "BROWSE_PATH"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "paths",\n      "doc": "A list of valid browse paths for the entity.\\n\\nBrowse paths are expected to be forward slash-separated strings. For example: \'prod/snowflake/datasetName\'"\n    }\n  ],\n  "doc": "Shared aspect containing Browse Paths to be indexed for an entity."\n}\n'))),(0,r.kt)("h3",{id:"globaltags"},"globalTags"),(0,r.kt)("p",null,"Tag aspect used for applying tags to an entity"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "globalTags"\n  },\n  "name": "GlobalTags",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "TagAssociation",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "Searchable": {\n                "addToFilters": true,\n                "fieldName": "tags",\n                "fieldType": "URN",\n                "filterNameOverride": "Tag",\n                "hasValuesFieldName": "hasTags"\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.TagUrn"\n              },\n              "type": "string",\n              "name": "tag",\n              "doc": "Urn of the applied tag"\n            }\n          ],\n          "doc": "Properties of an applied tag. For now, just an Urn. In the future we can extend this with other properties, e.g.\\npropagation parameters."\n        }\n      },\n      "name": "tags",\n      "doc": "Tags associated with a given entity"\n    }\n  ],\n  "doc": "Tag aspect used for applying tags to an entity"\n}\n'))),(0,r.kt)("h3",{id:"dataplatforminstance"},"dataPlatformInstance"),(0,r.kt)("p",null,"The specific instance of the data platform that this entity belongs to"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataPlatformInstance"\n  },\n  "name": "DataPlatformInstance",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "addToFilters": true,\n        "fieldType": "URN",\n        "filterNameOverride": "Platform"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": "string",\n      "name": "platform",\n      "doc": "Data Platform"\n    },\n    {\n      "Searchable": {\n        "addToFilters": true,\n        "fieldName": "platformInstance",\n        "fieldType": "URN",\n        "filterNameOverride": "Platform Instance"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "instance",\n      "default": null,\n      "doc": "Instance of the data platform (e.g. db instance)"\n    }\n  ],\n  "doc": "The specific instance of the data platform that this entity belongs to"\n}\n'))),(0,r.kt)("h3",{id:"glossaryterms"},"glossaryTerms"),(0,r.kt)("p",null,"Related business terms information"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "glossaryTerms"\n  },\n  "name": "GlossaryTerms",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "GlossaryTermAssociation",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "Searchable": {\n                "addToFilters": true,\n                "fieldName": "glossaryTerms",\n                "fieldType": "URN",\n                "filterNameOverride": "Glossary Term",\n                "hasValuesFieldName": "hasGlossaryTerms"\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.GlossaryTermUrn"\n              },\n              "type": "string",\n              "name": "urn",\n              "doc": "Urn of the applied glossary term"\n            }\n          ],\n          "doc": "Properties of an applied glossary term."\n        }\n      },\n      "name": "terms",\n      "doc": "The related business terms"\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "auditStamp",\n      "doc": "Audit stamp containing who reported the related business term"\n    }\n  ],\n  "doc": "Related business terms information"\n}\n'))),(0,r.kt)("h3",{id:"editablemlmodelgroupproperties"},"editableMlModelGroupProperties"),(0,r.kt)("p",null,"Properties associated with an ML Model Group editable from the UI"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "editableMlModelGroupProperties"\n  },\n  "name": "EditableMLModelGroupProperties",\n  "namespace": "com.linkedin.ml.metadata",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldName": "editedDescription",\n        "fieldType": "TEXT"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Documentation of the ml model group"\n    }\n  ],\n  "doc": "Properties associated with an ML Model Group editable from the UI"\n}\n'))),(0,r.kt)("h3",{id:"domains"},"domains"),(0,r.kt)("p",null,"Links from an Asset to its Domains"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "domains"\n  },\n  "name": "Domains",\n  "namespace": "com.linkedin.domain",\n  "fields": [\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "domain"\n          ],\n          "name": "AssociatedWith"\n        }\n      },\n      "Searchable": {\n        "/*": {\n          "addToFilters": true,\n          "fieldName": "domains",\n          "fieldType": "URN",\n          "filterNameOverride": "Domain",\n          "hasValuesFieldName": "hasDomain"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "domains",\n      "doc": "The Domains attached to an Asset"\n    }\n  ],\n  "doc": "Links from an Asset to its Domains"\n}\n'))),(0,r.kt)("h2",{id:"relationships"},"Relationships"),(0,r.kt)("h3",{id:"outgoing"},"Outgoing"),(0,r.kt)("p",null,"These are the relationships stored in this entity's aspects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"OwnedBy"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Corpuser via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,r.kt)("li",{parentName:"ul"},"CorpGroup via ",(0,r.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AssociatedWith"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Domain via ",(0,r.kt)("inlineCode",{parentName:"li"},"domains.domains"))))),(0,r.kt)("h3",{id:"incoming"},"Incoming"),(0,r.kt)("p",null,"These are the relationships stored in other entity's aspects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MemberOf"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MlModel via ",(0,r.kt)("inlineCode",{parentName:"li"},"mlModelProperties.groups"))))),(0,r.kt)("h2",{id:"global-metadata-model"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}p.isMDXComponent=!0}}]);