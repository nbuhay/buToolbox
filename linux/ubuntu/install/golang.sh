#!/bin/bash

# Reference: https://github.com/golang/go/wiki/Ubuntu

apt-get install -y golang-go
add-apt-repository -y ppa:gophers/archive
apt-get update
apt-get install -y golang-1.9-go

# install does not add go to PATH, do this manually
PATH=$PATH:/usr/lib/go-1.9/bin/