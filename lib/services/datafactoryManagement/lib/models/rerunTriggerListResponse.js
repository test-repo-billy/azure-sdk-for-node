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

/**
 * A list of rerun triggers.
 */
class RerunTriggerListResponse extends Array {
  /**
   * Create a RerunTriggerListResponse.
   * @member {string} [nextLink] The continuation token for getting the next
   * page of results, if any remaining results exist, null otherwise.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RerunTriggerListResponse
   *
   * @returns {object} metadata of RerunTriggerListResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RerunTriggerListResponse',
      type: {
        name: 'Composite',
        className: 'RerunTriggerListResponse',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RerunTriggerResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'RerunTriggerResource'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RerunTriggerListResponse;