FROM ubuntu:latest
MAINTAINER Nicholas Buhay
# Build: docker build -t nbuhay/spike-python-flask .
# Run:   docker run -d -p 8080:8080 --restart=always nbuhay/spike-python-flask

EXPOSE 8080

RUN apt-get update \
    && apt-get install -y \
    git \
    python-pip \
    python2.7

RUN git clone https://github.com/nbuhay/bu-toolbox.git \
    && pip install -r /bu-toolbox/spike/python/flask/requirements.txt

CMD [ "/usr/bin/python2.7", "/bu-toolbox/spike/python/flask/app.py", ">>", "/bu-toolbox/spike/python/flask/server.log", "&"]