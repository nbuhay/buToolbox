#!/bin/bash

# Install Node Version Manager
# https://github.com/creationix/nvm
curl https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

# Install latest Nodejs
nvm install node