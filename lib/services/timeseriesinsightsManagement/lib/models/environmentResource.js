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
 * An environment is a set of time-series data avaliable for query, and is the
 * top level Azure Time Series Insights resource.
 *
 * @extends models['TrackedResource']
 */
class EnvironmentResource extends models['TrackedResource'] {
  /**
   * Create a EnvironmentResource.
   * @member {object} [sku] The sku determines the capacity of the environment,
   * the SLA (in queries-per-minute and total capacity), and the billing rate.
   * @member {string} [sku.name] The name of this SKU. Possible values include:
   * 'S1', 'S2'
   * @member {number} [sku.capacity] The capacity of the sku. This value can be
   * changed to support scale out of environments after they have been created.
   * @member {moment.duration} dataRetentionTime ISO8601 timespan specifying
   * the minimum number of days the environment's events will be available for
   * query.
   * @member {string} [storageLimitExceededBehavior] The behavior the Time
   * Series Insights service should take when the environment's capacity has
   * been exceeded. If "PauseIngress" is specified, new events will not be read
   * from the event source. If "PurgeOldData" is specified, new events will
   * continue to be read and old events will be deleted from the environment.
   * The default behavior is PurgeOldData. Possible values include:
   * 'PurgeOldData', 'PauseIngress'
   * @member {array} [partitionKeyProperties] The list of partition keys
   * according to which the data in the environment will be ordered.
   * @member {string} [provisioningState] Provisioning state of the resource.
   * Possible values include: 'Accepted', 'Creating', 'Updating', 'Succeeded',
   * 'Failed', 'Deleting'
   * @member {date} [creationTime] The time the resource was created.
   * @member {uuid} [dataAccessId] An id used to access the environment data,
   * e.g. to query the environment's events or upload reference data for the
   * environment.
   * @member {string} [dataAccessFqdn] The fully qualified domain name used to
   * access the environment data, e.g. to query the environment's events or
   * upload reference data for the environment.
   * @member {object} [status] An object that represents the status of the
   * environment, and its internal state in the Time Series Insights service.
   * @member {object} [status.ingress] An object that represents the status of
   * ingress on an environment.
   * @member {string} [status.ingress.state] This string represents the state
   * of ingress operations on an environment. It can be "Disabled", "Ready",
   * "Running", "Paused" or "Unknown". Possible values include: 'Disabled',
   * 'Ready', 'Running', 'Paused', 'Unknown'
   * @member {object} [status.ingress.stateDetails] An object that contains the
   * details about an environment's state.
   * @member {string} [status.ingress.stateDetails.code] Contains the code that
   * represents the reason of an environment being in a particular state. Can
   * be used to programatically handle specific cases.
   * @member {string} [status.ingress.stateDetails.message] A message that
   * describes the state in detail.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of EnvironmentResource
   *
   * @returns {object} metadata of EnvironmentResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EnvironmentResource',
      type: {
        name: 'Composite',
        className: 'EnvironmentResource',
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
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'Sku'
            }
          },
          dataRetentionTime: {
            required: true,
            serializedName: 'properties.dataRetentionTime',
            type: {
              name: 'TimeSpan'
            }
          },
          storageLimitExceededBehavior: {
            required: false,
            serializedName: 'properties.storageLimitExceededBehavior',
            type: {
              name: 'Enum',
              allowedValues: [ 'PurgeOldData', 'PauseIngress' ]
            }
          },
          partitionKeyProperties: {
            required: false,
            serializedName: 'properties.partitionKeyProperties',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PartitionKeyPropertyElementType',
                  type: {
                    name: 'Composite',
                    className: 'PartitionKeyProperty'
                  }
              }
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'Enum',
              allowedValues: [ 'Accepted', 'Creating', 'Updating', 'Succeeded', 'Failed', 'Deleting' ]
            }
          },
          creationTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.creationTime',
            type: {
              name: 'DateTime'
            }
          },
          dataAccessId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.dataAccessId',
            type: {
              name: 'String'
            }
          },
          dataAccessFqdn: {
            required: false,
            readOnly: true,
            serializedName: 'properties.dataAccessFqdn',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'properties.status',
            type: {
              name: 'Composite',
              className: 'EnvironmentStatus'
            }
          }
        }
      }
    };
  }
}

module.exports = EnvironmentResource;