#!/bin/bash

# reset config
git checkout -- config

# cleanup prior k8s data
rm -f *.crt && rm -f *.key 

# copy certs generated from minikube
cp ~/.minikube/ca.crt . && cp ~/.minikube/client.* .

# write ip of minikube to config
cat config  | sed 's/MINIKUBE_IP/'"$(minikube ip)"'/g' > config