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
 * Storage region and service region mapping
 *
 */
class SupportedRegions {
  /**
   * Create a SupportedRegions.
   * @member {string} storageRegion Storage Region. Possible values include:
   * 'westus', 'centralus', 'eastus', 'northcentralus', 'southcentralus',
   * 'eastus2', 'westus2', 'westcentralus', 'westeurope', 'northeurope',
   * 'ukwest', 'uksouth', 'germanycentral', 'germanynortheast'
   * @member {string} serviceRegion Service Region. Possible values include:
   * 'westus', 'westeurope', 'eastus2euap', 'centraluseuap'
   */
  constructor() {
  }

  /**
   * Defines the metadata of SupportedRegions
   *
   * @returns {object} metadata of SupportedRegions
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SupportedRegions',
      type: {
        name: 'Composite',
        className: 'SupportedRegions',
        modelProperties: {
          storageRegion: {
            required: true,
            serializedName: 'storageRegion',
            type: {
              name: 'Enum',
              allowedValues: [ 'westus', 'centralus', 'eastus', 'northcentralus', 'southcentralus', 'eastus2', 'westus2', 'westcentralus', 'westeurope', 'northeurope', 'ukwest', 'uksouth', 'germanycentral', 'germanynortheast' ]
            }
          },
          serviceRegion: {
            required: true,
            serializedName: 'serviceRegion',
            type: {
              name: 'Enum',
              allowedValues: [ 'westus', 'westeurope', 'eastus2euap', 'centraluseuap' ]
            }
          }
        }
      }
    };
  }
}

module.exports = SupportedRegions;