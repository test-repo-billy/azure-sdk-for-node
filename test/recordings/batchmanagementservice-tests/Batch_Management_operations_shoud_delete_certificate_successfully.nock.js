// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificates/SHA1-cff2ab63c8c955aaf71989efa641b906558d9fb7?api-version=2018-12-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificateOperationResults/sha1-cff2ab63c8c955aaf71989efa641b906558d9fb7-8D6775A138E0EE0?api-version=2018-12-01',
  'retry-after': '15',
  'x-ms-request-id': 'ed4bbf85-f153-4b5e-b485-dc52a2379ca8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-deletes': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'e51a42d0-bf50-4ff4-bd18-4312371f16ab',
  'x-ms-routing-request-id':
   'WESTUS2:20190111T001647Z:e51a42d0-bf50-4ff4-bd18-4312371f16ab',
  date: 'Fri, 11 Jan 2019 00:16:47 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificateOperationResults/sha1-cff2ab63c8c955aaf71989efa641b906558d9fb7-8D6775A138E0EE0?api-version=2018-12-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificateOperationResults/sha1-cff2ab63c8c955aaf71989efa641b906558d9fb7-8d6775a138e0ee0?api-version=2018-12-01',
  'retry-after': '15',
  'x-ms-request-id': 'b1d381a0-3709-412f-865f-97a8f711c11b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '2e87d8e4-ccaa-49b4-951c-888d9129b230',
  'x-ms-routing-request-id':
   'WESTUS2:20190111T001718Z:2e87d8e4-ccaa-49b4-951c-888d9129b230',
  date: 'Fri, 11 Jan 2019 00:17:18 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificateOperationResults/sha1-cff2ab63c8c955aaf71989efa641b906558d9fb7-8d6775a138e0ee0?api-version=2018-12-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificateOperationResults/sha1-cff2ab63c8c955aaf71989efa641b906558d9fb7-8d6775a138e0ee0?api-version=2018-12-01',
  'retry-after': '15',
  'x-ms-request-id': '642c1c96-8b37-4049-88b9-39f712e5af95',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '4c6328fe-40ac-42bb-8cd1-23f05ed2b554',
  'x-ms-routing-request-id':
   'WESTUS2:20190111T001749Z:4c6328fe-40ac-42bb-8cd1-23f05ed2b554',
  date: 'Fri, 11 Jan 2019 00:17:48 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificateOperationResults/sha1-cff2ab63c8c955aaf71989efa641b906558d9fb7-8d6775a138e0ee0?api-version=2018-12-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '1a7c31e9-66d1-4c19-91ef-dcf16601d3f9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11998',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '32e3a353-248e-47e4-a506-7cca52f2555e',
  'x-ms-routing-request-id':
   'WESTUS2:20190111T001819Z:32e3a353-248e-47e4-a506-7cca52f2555e',
  date: 'Fri, 11 Jan 2019 00:18:19 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];