## Description
Use the Node.js aws-sdk to put an object into an existing AWS S3 bucket.

## Requires
* `awscli` installed.
* Configure `awscli` with user who has permissions for:
  * CloudFormation to create and destroy an S3 bucket
  * S3 to add, list, and delete objects from buckets
* New bucket name if  `nodejs-aws-sdk-object-upload` is taken

## Runbook
Install the Node.js aws-sdk.
```bash
$ npm install
```

Install the `awscli` and [configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-quick-configuration) the cli for an IAM user with the required permissions.

Create a S3 bucket using the CloudFormation template `s3.bucket.cloudformation.yaml`.
```bash
$ aws cloudformation create-stack --stack-name s3-bucket --template-body file://./s3.bucket.cloudformation.yaml
{
    "StackId": "arn:aws:cloudformation:us-east-1:123456789012:stack/s3-bucket/stack-resource-guid-id"
}
```

Verify contents of the file `s3.test.txt`.  Then upload the file using the `awscli`.
```bash
$ cat s3.test.txt
Hello from AWS S3 bucket!

$ node putObject.js
{ ETag: '"123.....abc"' }
S3 Upload Successful!
```

List contents of the `nodejs-aws-sdk-object-upload` bucket and verify a new `s3.test.txt` object exists.
```bash
$ aws s3 ls nodejs-aws-sdk-object-upload
2018-01-15 00:55:17         26 2018-1-15-s3.test.txt
```

Copy the file `018-1-15-s3.test.txt` down from S3 to the local system and verify contents.

```bash
$ aws s3 cp s3://nodejs-aws-sdk-object-upload/2018-1-15-s3.test.txt s3.test.from.bucket.txt
download: s3://nodejs-aws-sdk-object-upload/2018-1-15-s3.test.txt to ./s3.test.from.bucket.txt

$ cat s3.text.from.bucket.txt
Hello from AWS S3 bucket!
```

Clean up the bucket.
```bash
$ aws s3 rm s3://nodejs-aws-sdk-object-upload/ --recursive
delete: s3://nodejs-aws-sdk-object-upload/2018-1-15-s3.test.txt
```

Remove the S3 bucket by deleting the CloudFormation stack.
```bash
$ aws cloudformation delete-stack --stack-name s3-bucket
```