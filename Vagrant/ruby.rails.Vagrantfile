# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision "shell", inline: <<-SHELL
    # References
    # https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-ubuntu-16-04
    # http://guides.rubyonrails.org/getting_started.html

    # Update local package cache
    sudo apt-get update
  
    # Install ruby dependencies, sqlite3, libsqlite3-dev, and git
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
      sqlite3 \
      libsqlite3-dev \
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

    # Install bundler, sqlite3, and ffi gems
    echo "gem: --no-document" > ~/.gemrc
    gem install bundler
    gem install sqlite3
    gem install ffi

    # Install rails
    gem install rails
    rails -v

    # Install JavaScript Runtime (nodejs)
    cd /tmp
    curl -sSL https://deb.nodesource.com/setup_6.x -o nodejs.sh
    cat /tmp/nodejs.sh | sudo -E bash -
    sudo apt-get install -y nodejs

  SHELL
  config.vm.network "private_network", type: "dhcp"
  config.vm.synced_folder ".", "/home/vagrant/rails"
end