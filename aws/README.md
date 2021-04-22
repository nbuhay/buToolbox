# Getting Started

* Start Vagrant VM

```bash
$ vagrant up
```

* Access VM

```bash
$ vagrant ssh
```

* Confirm AWS CLI installed

```bash
vagrant@vagrant:~$ aws --version
aws-cli/2.1.39 Python/3.8.8 Linux/5.4.0-58-generic exe/x86_64.ubuntu.20 prompt/off
```

* Configure using [these AWS CLI v2 Docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)

```bash
vagrant@vagrant:~$ aws configure
AWS Access Key ID [None]: <REDACTED-YOUR-USER-AWS-KEY>
AWS Secret Access Key [None]: <REDACTED-YOUR-USER-SC-KEY>
Default region name [None]: us-east-2
Default output format [None]: json
```

* Verify config works

```bash
vagrant@vagrant:~$ aws iam get-user
{
    "User": {
        "Path": "/",
        "UserName": "<YOUR-USER>",
        "UserId": "<REDACTED>",
        "Arn": "<REDACTED>",
        "CreateDate": "<REDACTED-SOME-TIME>"
    }
}
```