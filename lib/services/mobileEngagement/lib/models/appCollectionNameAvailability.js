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
 * Class representing a AppCollectionNameAvailability.
 */
class AppCollectionNameAvailability {
  /**
   * Create a AppCollectionNameAvailability.
   * @member {string} [name] Name.
   * @member {boolean} [available] Available.
   * @member {string} [unavailabilityReason] UnavailabilityReason.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppCollectionNameAvailability
   *
   * @returns {object} metadata of AppCollectionNameAvailability
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppCollectionNameAvailability',
      type: {
        name: 'Composite',
        className: 'AppCollectionNameAvailability',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          available: {
            required: false,
            serializedName: 'available',
            type: {
              name: 'Boolean'
            }
          },
          unavailabilityReason: {
            required: false,
            serializedName: 'unavailabilityReason',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppCollectionNameAvailability;