#!/bin/bash

# Install AWS CLI using default python
# http://docs.aws.amazon.com/cli/latest/userguide/awscli-install-bundle.html#install-bundle-other-os-prereq
curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
apt-get install -y unzip
unzip awscli-bundle.zip
/usr/bin/python3 awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
echo 'Configure awscli for usage: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-quick-configuration'