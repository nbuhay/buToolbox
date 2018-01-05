# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision "shell", inline: <<-SHELL

    # Install AWS CLI using default python
    # http://docs.aws.amazon.com/cli/latest/userguide/awscli-install-bundle.html#install-bundle-other-os-prereq
    curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
    sudo apt-get install -y unzip
    sudo unzip awscli-bundle.zip
    sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
  
    # Manually configure aws cli with aws user access and secret keys
    # https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-quick-configuration

   SHELL
  config.vm.network "private_network", type: "dhcp"
  config.vm.network "forwarded_port", guest: 80, host: 80, host_ip: "127.0.0.1"
end