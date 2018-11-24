#!/bin/bash

rm -rf /home/vagrant/.kube/

mkdir -p /home/vagrant/.kube/

# move all minikube configs over
cp /vagrant/minikubeLab/*.crt /home/vagrant/.kube/
cp /vagrant/minikubeLab/*.key /home/vagrant/.kube/
cp /vagrant/minikubeLab/config /home/vagrant/.kube/