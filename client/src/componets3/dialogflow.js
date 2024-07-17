// dialogflow.js
const dialogflow = require('@google-cloud/dialogflow');
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath('chatagent-cckd', 'yourSessionId');