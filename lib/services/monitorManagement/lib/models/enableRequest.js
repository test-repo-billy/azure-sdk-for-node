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
 * Describes a receiver that should be resubscribed.
 *
 */
class EnableRequest {
  /**
   * Create a EnableRequest.
   * @property {string} receiverName The name of the receiver to resubscribe.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EnableRequest
   *
   * @returns {object} metadata of EnableRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EnableRequest',
      type: {
        name: 'Composite',
        className: 'EnableRequest',
        modelProperties: {
          receiverName: {
            required: true,
            serializedName: 'receiverName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EnableRequest;
