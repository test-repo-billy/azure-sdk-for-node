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
 * Represents a single Azure resource and its referencing DNS records.
 *
 */
class DnsResourceReference {
  /**
   * Create a DnsResourceReference.
   * @member {array} [dnsResources] A list of dns Records
   * @member {object} [targetResource] A reference to an azure resource from
   * where the dns resource value is taken.
   * @member {string} [targetResource.id] Resource Id.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DnsResourceReference
   *
   * @returns {object} metadata of DnsResourceReference
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DnsResourceReference',
      type: {
        name: 'Composite',
        className: 'DnsResourceReference',
        modelProperties: {
          dnsResources: {
            required: false,
            serializedName: 'dnsResources',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SubResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'SubResource'
                  }
              }
            }
          },
          targetResource: {
            required: false,
            serializedName: 'targetResource',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          }
        }
      }
    };
  }
}

module.exports = DnsResourceReference;
