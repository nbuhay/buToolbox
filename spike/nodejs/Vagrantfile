# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision "shell", path: "../../linux/ubuntu/install/nodejs.sh"
  config.vm.network "private_network", type: "dhcp"
  config.vm.network "forwarded_port", guest: 3000, host: 3000, host_ip: "127.0.0.1"
  config.vm.synced_folder ".", "/home/vagrant/nodejs"
end