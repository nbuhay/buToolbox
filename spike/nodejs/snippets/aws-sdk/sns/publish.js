var AWS = require('aws-sdk');

// ensure a region is set before using SNS
AWS.config.update({ region: 'us-east-2' });

var SNS = new AWS.SNS()
  , data =  {
      "msg" : "Hello world!",
      "date" : Date.now()
  }

// format json for transit by adding \n and \t chars
let formattedData = JSON.stringify(data, null, '\t');

var params = {
  Subject: `Hello from an AWS SNS Topic`,
  Message: formattedData,
  TopicArn: process.env.TOPIC_ARN
}

SNS.publish(params, (err, publishData) => {
  if (err) console.log(err, err.stack); // an error occured
  else console.log(publishData);
});