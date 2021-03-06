// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2019-06-01.9.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 06 Jun 2019 23:36:06 GMT',
  etag: '0x8D6EAD7BF326A90',
  location:
   'https://test1.westus.batch.azure.com/pools/nodesdkinboundendpointpool',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e008511e-4b71-44df-b665-a01273617fd1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid:
   'https://test1.westus.batch.azure.com/pools/nodesdkinboundendpointpool',
  date: 'Thu, 06 Jun 2019 23:36:05 GMT',
  connection: 'close' });
 return result; }]];