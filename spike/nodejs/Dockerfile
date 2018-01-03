FROM ubuntu:latest
MAINTAINER Nicholas Buhay
# Build: docker build -t nbuhay/spike-nodejs .
# Run:   docker run -d -p 3000:3000 --restart=always nbuhay/spike-nodejs
ENV NVM_DIR $HOME/.nvm
ENV NODE_VERSION 9.3.0
EXPOSE 3000
RUN apt-get update \
  && apt-get install -y git curl
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash \
  && . $NVM_DIR/nvm.sh \
  && nvm install $NODE_VERSION
RUN git clone https://github.com/nbuhay/bu-toolbox.git
CMD [ "bash", "-c", "/.nvm/versions/node/v$NODE_VERSION/bin/node /bu-toolbox/spike/nodejs/server.js", ">>", "/bu-toolbox/spike/nodejs/server.log", "&"]