## Description
Use the Node.js aws-sdk to publish a message to an existing SNS topic.

## Requires
* Node.js installed.
* `awscli` installed.
* Configure `awscli` with user who has permissions for:
  * CloudFormation to create and destroy an SNS topic
  * SNS to publish a message to a topic

## Runbook
Install the Node.js aws-sdk.
```bash
$ npm install
```

Install the `awscli` and [configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-quick-configuration) the cli for an IAM user with the required permissions.

Set `SUBSCRIPTION_EMAIL` to an email you own (this will be the SNS recipient) and then create a SNS topic using the CloudFormation template `sns.topic.cloudformation.yaml`.
```bash
$ export SUBSCRIPTION_EMAIL=your.email@your.email.guru
$ aws cloudformation create-stack \
      --stack-name sns-topic \
      --parameters ParameterKey=UserEmail,ParameterValue=$SUBSCRIPTION_EMAIL \
      --template-body file://sns.topic.cloudformation.yaml
{
    "StackId": "arn:aws:cloudformation:us-east-1:12345678910:stack/sns-topic/stack-resource-guid-id"
}
```

Verify the SNS topic exists.
```bash
$ aws sns list-topics
{
  "Topics": [
    {
      "TopicArn": "arn:aws:sns:us-east-1:12345678910:test-sns-topic"
    }
  ]
}
```

Login to the email recipient account and confirm the new SNS subscription.

Send a message using the `awscli`.
```bash
$ aws sns publish \
      --message '{ "message" : "Hello from awscli!" }' \
      --topic-arn arn:aws:sns:us-east-1:12345678910:test-sns-topic
{
    "MessageId": "1234g1234-1234-1234-1234-123412341234"
}
```

Send a message using `publish.js`.
```bash
$ TOPIC_ARN=arn:aws:sns:us-east-1:12345678910:test-sns-topic \
  node publish.js
{
  ResponseMetadata: {
    RequestId: '1234g1234-1234-1234-1234-123412341234'
  },
  MessageId: '1234g1234-1234-1234-1234-123412341234' 
}
```

Verify the emails have been received in the the email recipient account.

```bash
# from awscli
{ "msg" : "Hello from awscli!" }

# from publish.js
{
  "msg": "Hello world!",
  "date": 1516677501757
}
```

Cleanup the SNS topic by deleting the CloudFormation stack.
```bash
$ aws cloudformation delete-stack --stack-name sns-topic
```