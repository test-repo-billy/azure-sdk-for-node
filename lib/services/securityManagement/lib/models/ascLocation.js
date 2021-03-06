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
 * The ASC location of the subscription is in the "name" field
 *
 * @extends models['Resource']
 */
class AscLocation extends models['Resource'] {
  /**
   * Create a AscLocation.
   * @member {object} [properties]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AscLocation
   *
   * @returns {object} metadata of AscLocation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AscLocation',
      type: {
        name: 'Composite',
        className: 'AscLocation',
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
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = AscLocation;
