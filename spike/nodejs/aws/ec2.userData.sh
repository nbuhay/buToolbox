#!/bin/bash

# Install Node Version Manager
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

# Install latest Nodejs
nvm install node

# Install and run app
git clone https://github.com/nbuhay/buToolbox.git
node buToolbox/spike/nodejs/server.js >> buToolbox/spike/nodejs/server.log &