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
 * Application gateway BackendHealthHttp settings.
 *
 */
class ApplicationGatewayBackendHealthHttpSettings {
  /**
   * Create a ApplicationGatewayBackendHealthHttpSettings.
   * @property {object} [backendHttpSettings] Reference of an
   * ApplicationGatewayBackendHttpSettings resource.
   * @property {number} [backendHttpSettings.port] The destination port on the
   * backend.
   * @property {string} [backendHttpSettings.protocol] The protocol used to
   * communicate with the backend. Possible values include: 'Http', 'Https'
   * @property {string} [backendHttpSettings.cookieBasedAffinity] Cookie based
   * affinity. Possible values include: 'Enabled', 'Disabled'
   * @property {number} [backendHttpSettings.requestTimeout] Request timeout in
   * seconds. Application Gateway will fail the request if response is not
   * received within RequestTimeout. Acceptable values are from 1 second to
   * 86400 seconds.
   * @property {object} [backendHttpSettings.probe] Probe resource of an
   * application gateway.
   * @property {string} [backendHttpSettings.probe.id] Resource ID.
   * @property {array} [backendHttpSettings.authenticationCertificates] Array
   * of references to application gateway authentication certificates.
   * @property {array} [backendHttpSettings.trustedRootCertificates] Array of
   * references to application gateway trusted root certificates.
   * @property {object} [backendHttpSettings.connectionDraining] Connection
   * draining of the backend http settings resource.
   * @property {boolean} [backendHttpSettings.connectionDraining.enabled]
   * Whether connection draining is enabled or not.
   * @property {number}
   * [backendHttpSettings.connectionDraining.drainTimeoutInSec] The number of
   * seconds connection draining is active. Acceptable values are from 1 second
   * to 3600 seconds.
   * @property {string} [backendHttpSettings.hostName] Host header to be sent
   * to the backend servers.
   * @property {boolean} [backendHttpSettings.pickHostNameFromBackendAddress]
   * Whether to pick host header should be picked from the host name of the
   * backend server. Default value is false.
   * @property {string} [backendHttpSettings.affinityCookieName] Cookie name to
   * use for the affinity cookie.
   * @property {boolean} [backendHttpSettings.probeEnabled] Whether the probe
   * is enabled. Default value is false.
   * @property {string} [backendHttpSettings.path] Path which should be used as
   * a prefix for all HTTP requests. Null means no path will be prefixed.
   * Default value is null.
   * @property {string} [backendHttpSettings.provisioningState] Provisioning
   * state of the backend http settings resource. Possible values are:
   * 'Updating', 'Deleting', and 'Failed'.
   * @property {string} [backendHttpSettings.name] Name of the backend http
   * settings that is unique within an Application Gateway.
   * @property {string} [backendHttpSettings.etag] A unique read-only string
   * that changes whenever the resource is updated.
   * @property {string} [backendHttpSettings.type] Type of the resource.
   * @property {array} [servers] List of ApplicationGatewayBackendHealthServer
   * resources.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationGatewayBackendHealthHttpSettings
   *
   * @returns {object} metadata of ApplicationGatewayBackendHealthHttpSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationGatewayBackendHealthHttpSettings',
      type: {
        name: 'Composite',
        className: 'ApplicationGatewayBackendHealthHttpSettings',
        modelProperties: {
          backendHttpSettings: {
            required: false,
            serializedName: 'backendHttpSettings',
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayBackendHttpSettings'
            }
          },
          servers: {
            required: false,
            serializedName: 'servers',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ApplicationGatewayBackendHealthServerElementType',
                  type: {
                    name: 'Composite',
                    className: 'ApplicationGatewayBackendHealthServer'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationGatewayBackendHealthHttpSettings;
