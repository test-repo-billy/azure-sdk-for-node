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
 * Common settings field for backup management
 *
 */
class Settings {
  /**
   * Create a Settings.
   * @member {string} [timeZone] TimeZone optional input as string. For
   * example: TimeZone = "Pacific Standard Time".
   * @member {boolean} [issqlcompression] SQL compression flag
   * @member {boolean} [isCompression] Workload compression flag. This has been
   * added so that 'isSqlCompression'
   * will be deprecated once clients upgrade to consider this flag.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Settings
   *
   * @returns {object} metadata of Settings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Settings',
      type: {
        name: 'Composite',
        className: 'Settings',
        modelProperties: {
          timeZone: {
            required: false,
            serializedName: 'timeZone',
            type: {
              name: 'String'
            }
          },
          issqlcompression: {
            required: false,
            serializedName: 'issqlcompression',
            type: {
              name: 'Boolean'
            }
          },
          isCompression: {
            required: false,
            serializedName: 'isCompression',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = Settings;