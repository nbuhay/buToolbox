#!/bin/bash

# Install AWS CLI using default python
# http://docs.aws.amazon.com/cli/latest/userguide/awscli-install-bundle.html#install-bundle-other-os-prereq
curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
sudo apt-get install -y unzip
sudo unzip awscli-bundle.zip
sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws

# Manually configure aws cli with aws user access and secret keys
# https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-quick-configuration