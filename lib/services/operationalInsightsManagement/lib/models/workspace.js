/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the Workspace class.
 * @constructor
 * The top level Workspace resource container.
 *
 * @member {string} [provisioningState] The provisioning state of the
 * workspace. Possible values include: 'Creating', 'Succeeded', 'Failed',
 * 'Canceled', 'Deleting', 'ProvisioningAccount'
 *
 * @member {string} [source] The source of the workspace.  Source defines where
 * the workspace was created. 'Azure' implies it was created in Azure.
 * 'External' implies it was created via the Operational Insights Portal. This
 * value is set on the service side and read-only on the client side.
 *
 * @member {string} [customerId] The ID associated with the workspace.  Setting
 * this value at creation time allows the workspace being created to be linked
 * to an existing workspace.
 *
 * @member {string} [portalUrl] The URL of the Operational Insights portal for
 * this workspace.  This value is set on the service side and read-only on the
 * client side.
 *
 * @member {object} [sku] The SKU of the workspace.
 *
 * @member {string} [sku.name] The name of the SKU. Possible values include:
 * 'Free', 'Standard', 'Premium', 'Unlimited', 'PerNode', 'Standalone'
 *
 * @member {number} [retentionInDays] The workspace data retention in days. -1
 * means Unlimited retention for the Unlimited Sku. 730 days is the maximum
 * allowed for all other Skus.
 *
 * @member {string} [eTag] The ETag of the workspace.
 *
 */
class Workspace extends models['Resource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Workspace
   *
   * @returns {object} metadata of Workspace
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Workspace',
      type: {
        name: 'Composite',
        className: 'Workspace',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          source: {
            required: false,
            serializedName: 'properties.source',
            type: {
              name: 'String'
            }
          },
          customerId: {
            required: false,
            serializedName: 'properties.customerId',
            type: {
              name: 'String'
            }
          },
          portalUrl: {
            required: false,
            serializedName: 'properties.portalUrl',
            type: {
              name: 'String'
            }
          },
          sku: {
            required: false,
            serializedName: 'properties.sku',
            type: {
              name: 'Composite',
              className: 'Sku'
            }
          },
          retentionInDays: {
            required: false,
            serializedName: 'properties.retentionInDays',
            constraints: {
              InclusiveMaximum: 730,
              InclusiveMinimum: -1
            },
            type: {
              name: 'Number'
            }
          },
          eTag: {
            required: false,
            serializedName: 'eTag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Workspace;