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
 * The details of the error.
 *
 */
class ErrorDetails {
  /**
   * Create a ErrorDetails.
   * @member {string} [code] One of a server-defined set of error codes.
   * @member {string} [message] A human-readable representation of the error.
   * @member {string} [target] (Optional) The target of the error.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorDetails
   *
   * @returns {object} metadata of ErrorDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorDetails',
      type: {
        name: 'Composite',
        className: 'ErrorDetails',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          target: {
            required: false,
            serializedName: 'target',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorDetails;