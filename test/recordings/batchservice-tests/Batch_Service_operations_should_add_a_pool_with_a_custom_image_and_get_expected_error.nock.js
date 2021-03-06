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
  .reply(400, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"InvalidPropertyValue\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The value provided for one of the properties in the request body is invalid.\\nRequestId:26561f9c-aeaf-46f6-9fab-8f78ea2a7489\\nTime:2019-06-06T23:36:03.7621907Z\"\r\n  },\"values\":[\r\n    {\r\n      \"key\":\"PropertyName\",\"value\":\"virtualMachineImageId\"\r\n    },{\r\n      \"key\":\"PropertyValue\",\"value\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test/providers/Microsoft.Compute/images/FakeImage\"\r\n    },{\r\n      \"key\":\"Reason\",\"value\":\"The specified virtualMachineImageId is in a different subscription and cannot be used with the current Batch account in subscription f30ef677-64a9-4768-934f-5fbbc0e1ad27\"\r\n    }\r\n  ]\r\n}", { 'content-length': '842',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '26561f9c-aeaf-46f6-9fab-8f78ea2a7489',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Thu, 06 Jun 2019 23:36:02 GMT',
  connection: 'close' });
 return result; }]];