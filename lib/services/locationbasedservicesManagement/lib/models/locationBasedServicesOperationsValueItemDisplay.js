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
 * The human-readable description of the operation.
 *
 */
class LocationBasedServicesOperationsValueItemDisplay {
  /**
   * Create a LocationBasedServicesOperationsValueItemDisplay.
   * @member {string} [provider] Service provider: Microsoft Location Based
   * Services.
   * @member {string} [resource] Resource on which the operation is performed.
   * @member {string} [operation] The action that users can perform, based on
   * their permission level.
   * @member {string} [description] The description of the operation.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LocationBasedServicesOperationsValueItemDisplay
   *
   * @returns {object} metadata of LocationBasedServicesOperationsValueItemDisplay
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LocationBasedServicesOperations_valueItem_display',
      type: {
        name: 'Composite',
        className: 'LocationBasedServicesOperationsValueItemDisplay',
        modelProperties: {
          provider: {
            required: false,
            readOnly: true,
            serializedName: 'provider',
            type: {
              name: 'String'
            }
          },
          resource: {
            required: false,
            readOnly: true,
            serializedName: 'resource',
            type: {
              name: 'String'
            }
          },
          operation: {
            required: false,
            readOnly: true,
            serializedName: 'operation',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LocationBasedServicesOperationsValueItemDisplay;
