/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientCredentials } from 'ms-rest';
import { AzureServiceClient, AzureServiceClientOptions } from 'ms-rest-azure';
import * as models from "./models";
import * as operations from "./operations";

export default class MonitorManagementClient extends AzureServiceClient {
  /**
   * Initializes a new instance of the MonitorManagementClient class.
   * @constructor
   *
   * @class
   * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {string} subscriptionId - The Azure subscription Id.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.acceptLanguage] - The preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - The retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - Whether a unique x-ms-client-request-id should be generated. When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: ServiceClientCredentials, subscriptionId: string, baseUri?: string, options?: AzureServiceClientOptions);

  credentials: ServiceClientCredentials;

  subscriptionId: string;

  acceptLanguage: string;

  longRunningOperationRetryTimeout: number;

  generateClientRequestId: boolean;

  // Operation groups
  autoscaleSettings: operations.AutoscaleSettings;
  operations: operations.Operations;
  alertRuleIncidents: operations.AlertRuleIncidents;
  alertRules: operations.AlertRules;
  logProfiles: operations.LogProfiles;
  diagnosticSettingsOperations: operations.DiagnosticSettingsOperations;
  diagnosticSettingsCategoryOperations: operations.DiagnosticSettingsCategoryOperations;
  actionGroups: operations.ActionGroups;
  activityLogAlerts: operations.ActivityLogAlerts;
  activityLogs: operations.ActivityLogs;
  eventCategories: operations.EventCategories;
  tenantActivityLogs: operations.TenantActivityLogs;
  metricDefinitions: operations.MetricDefinitions;
  metrics: operations.Metrics;
  metricBaseline: operations.MetricBaseline;
  metricAlerts: operations.MetricAlerts;
  metricAlertsStatus: operations.MetricAlertsStatus;
  scheduledQueryRules: operations.ScheduledQueryRules;
  metricNamespaces: operations.MetricNamespaces;
}

export { MonitorManagementClient, models as MonitorManagementModels };
