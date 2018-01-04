# -*- mode: ruby -*-
# vi: set ft=ruby :
# Reference:  https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-ubuntu-16-04

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision "shell", inline: <<-SHELL

    # update local package cache
    sudo apt-get update
  
    # Install ruby dependencies and git
    sudo apt-get install -y \
      autoconf \
      bison \
      build-essential \
      libssl-dev \
      libyaml-dev \
      libreadline6-dev \
      zlib1g-dev \
      libncurses5-dev \
      libffi-dev \
      libgdbm3 \
      libgdbm-dev \
      git

    # Install rubenv
    git clone https://github.com/rbenv/rbenv.git ~/.rbenv
    echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
    echo 'eval "$(rbenv init -)"' >> ~/.bashrc
    export PATH="$HOME/.rbenv/bin:$PATH"
    eval "$(rbenv init -)"
    type rbenv
    git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
    rbenv install 2.3.1 --verbose
    rbenv global 2.3.1 --verbose
    ruby -v

    # Install gem bundler
    echo "gem: --no-document" > ~/.gemrc
    gem install bundler

    # Install rails
    gem install rails
    rails -v

  SHELL
  config.vm.network "private_network", type: "dhcp"
end