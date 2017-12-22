#!/bin/bash

# Update apt-get
sudo apt-get update

# Install pip
sudo apt-get install -y python-pip

# Install and run app
pip install -r /bu-toolbox/spike/python/flask/requirements.txt
python /bu-toolbox/spike/python/flask/app.py >> /bu-toolbox/spike/python/flask/server.log &