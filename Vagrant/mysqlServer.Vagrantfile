# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision "shell", inline: <<-SHELL

    # Install mysql-server 
    debconf-set-selections <<< 'mysql-server mysql-server/root_password password MySuperPassword'
    debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password MySuperPassword'
    apt-get update
    apt-get install -y mysql-server

  SHELL
  config.vm.network "forwarded_port", guest: 3306, host: 3306, host_ip: "127.0.0.1"
END