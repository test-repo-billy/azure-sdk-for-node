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
 * The image reference.
 *
 */
class ImageReference {
  /**
   * Create a ImageReference.
   * @member {string} publisher Publisher of the image.
   * @member {string} offer Offer of the image.
   * @member {string} sku SKU of the image.
   * @member {string} [version] Version of the image.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageReference
   *
   * @returns {object} metadata of ImageReference
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageReference',
      type: {
        name: 'Composite',
        className: 'ImageReference',
        modelProperties: {
          publisher: {
            required: true,
            serializedName: 'publisher',
            type: {
              name: 'String'
            }
          },
          offer: {
            required: true,
            serializedName: 'offer',
            type: {
              name: 'String'
            }
          },
          sku: {
            required: true,
            serializedName: 'sku',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ImageReference;