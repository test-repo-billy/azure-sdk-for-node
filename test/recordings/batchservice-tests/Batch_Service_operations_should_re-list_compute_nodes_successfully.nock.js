// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes?api-version=2018-08-01.7.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-14141481_2-20180821t200555z\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-14141481_2-20180821t200555z\",\"state\":\"reimaging\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2018-08-21T20:23:12.2970717Z\",\"lastBootTime\":\"2018-08-21T20:11:08.5252994Z\",\"allocationTime\":\"2018-08-21T20:05:55.1606562Z\",\"ipAddress\":\"10.0.0.6\",\"affinityId\":\"TVM:tvm-14141481_2-20180821t200555z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo hello > hello.txt\",\"userIdentity\":{\r\n          \"autoUser\":{\r\n            \"elevationLevel\":\"nonadmin\"\r\n          }\r\n        },\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2018-08-21T20:11:11.1383506Z\",\"endTime\":\"2018-08-21T20:11:11.2845899Z\",\"exitCode\":0,\"result\":\"Success\",\"retryCount\":0\r\n      },\"isDedicated\":true\r\n    },{\r\n      \"id\":\"tvm-14141481_3-20180821t200555z\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-14141481_3-20180821t200555z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2018-08-21T20:11:14.1474938Z\",\"lastBootTime\":\"2018-08-21T20:11:11.1369007Z\",\"allocationTime\":\"2018-08-21T20:05:55.1606562Z\",\"ipAddress\":\"10.0.0.5\",\"affinityId\":\"TVM:tvm-14141481_3-20180821t200555z\",\"vmSize\":\"small\",\"totalTasksRun\":6,\"totalTasksSucceeded\":3,\"runningTasksCount\":0,\"recentTasks\":[\r\n        {\r\n          \"taskUrl\":\"https://lchency4.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/helloworldnodesdktesttask2\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"helloworldnodesdktesttask2\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2018-08-21T20:25:27.6289624Z\",\"endTime\":\"2018-08-21T20:25:27.7293535Z\",\"exitCode\":0,\"result\":\"Success\",\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        },{\r\n          \"taskUrl\":\"https://lchency4.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/helloworldnodesdktesttask\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"helloworldnodesdktesttask\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2018-08-21T20:25:30.2637708Z\",\"endTime\":\"2018-08-21T20:25:49.4037464Z\",\"exitCode\":0,\"result\":\"Success\",\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        },{\r\n          \"taskUrl\":\"https://lchency4.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/taskwithauthtokensettings\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"taskwithauthtokensettings\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2018-08-21T20:27:13.8577921Z\",\"endTime\":\"2018-08-21T20:27:13.9827838Z\",\"exitCode\":0,\"result\":\"Success\",\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        },{\r\n          \"taskUrl\":\"https://lchency4.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/taskwithuseridentity\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"taskwithuseridentity\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2018-08-21T20:27:18.4686303Z\",\"endTime\":\"2018-08-21T20:27:18.5296295Z\",\"exitCode\":0,\"result\":\"Success\",\"retryCount\":3,\"lastRetryTime\":\"2018-08-21T20:27:16.7229929Z\",\"requeueCount\":0\r\n          }\r\n        }\r\n      ],\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo hello > hello.txt\",\"userIdentity\":{\r\n          \"autoUser\":{\r\n            \"elevationLevel\":\"nonadmin\"\r\n          }\r\n        },\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2018-08-21T20:11:14.1474938Z\",\"endTime\":\"2018-08-21T20:11:14.2844393Z\",\"exitCode\":0,\"result\":\"Success\",\"retryCount\":0\r\n      },\"isDedicated\":true\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '91d46541-a5cf-48d3-9e5a-5a292e3e3ef4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:27:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes?api-version=2018-08-01.7.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-14141481_2-20180821t200555z\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-14141481_2-20180821t200555z\",\"state\":\"reimaging\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2018-08-21T20:23:12.2970717Z\",\"lastBootTime\":\"2018-08-21T20:11:08.5252994Z\",\"allocationTime\":\"2018-08-21T20:05:55.1606562Z\",\"ipAddress\":\"10.0.0.6\",\"affinityId\":\"TVM:tvm-14141481_2-20180821t200555z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo hello > hello.txt\",\"userIdentity\":{\r\n          \"autoUser\":{\r\n            \"elevationLevel\":\"nonadmin\"\r\n          }\r\n        },\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2018-08-21T20:11:11.1383506Z\",\"endTime\":\"2018-08-21T20:11:11.2845899Z\",\"exitCode\":0,\"result\":\"Success\",\"retryCount\":0\r\n      },\"isDedicated\":true\r\n    },{\r\n      \"id\":\"tvm-14141481_3-20180821t200555z\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-14141481_3-20180821t200555z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2018-08-21T20:11:14.1474938Z\",\"lastBootTime\":\"2018-08-21T20:11:11.1369007Z\",\"allocationTime\":\"2018-08-21T20:05:55.1606562Z\",\"ipAddress\":\"10.0.0.5\",\"affinityId\":\"TVM:tvm-14141481_3-20180821t200555z\",\"vmSize\":\"small\",\"totalTasksRun\":6,\"totalTasksSucceeded\":3,\"runningTasksCount\":0,\"recentTasks\":[\r\n        {\r\n          \"taskUrl\":\"https://lchency4.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/helloworldnodesdktesttask2\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"helloworldnodesdktesttask2\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2018-08-21T20:25:27.6289624Z\",\"endTime\":\"2018-08-21T20:25:27.7293535Z\",\"exitCode\":0,\"result\":\"Success\",\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        },{\r\n          \"taskUrl\":\"https://lchency4.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/helloworldnodesdktesttask\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"helloworldnodesdktesttask\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2018-08-21T20:25:30.2637708Z\",\"endTime\":\"2018-08-21T20:25:49.4037464Z\",\"exitCode\":0,\"result\":\"Success\",\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        },{\r\n          \"taskUrl\":\"https://lchency4.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/taskwithauthtokensettings\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"taskwithauthtokensettings\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2018-08-21T20:27:13.8577921Z\",\"endTime\":\"2018-08-21T20:27:13.9827838Z\",\"exitCode\":0,\"result\":\"Success\",\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        },{\r\n          \"taskUrl\":\"https://lchency4.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/taskwithuseridentity\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"taskwithuseridentity\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2018-08-21T20:27:18.4686303Z\",\"endTime\":\"2018-08-21T20:27:18.5296295Z\",\"exitCode\":0,\"result\":\"Success\",\"retryCount\":3,\"lastRetryTime\":\"2018-08-21T20:27:16.7229929Z\",\"requeueCount\":0\r\n          }\r\n        }\r\n      ],\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo hello > hello.txt\",\"userIdentity\":{\r\n          \"autoUser\":{\r\n            \"elevationLevel\":\"nonadmin\"\r\n          }\r\n        },\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2018-08-21T20:11:14.1474938Z\",\"endTime\":\"2018-08-21T20:11:14.2844393Z\",\"exitCode\":0,\"result\":\"Success\",\"retryCount\":0\r\n      },\"isDedicated\":true\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '91d46541-a5cf-48d3-9e5a-5a292e3e3ef4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:27:24 GMT',
  connection: 'close' });
 return result; }]];