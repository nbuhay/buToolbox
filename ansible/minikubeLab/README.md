# Minikube Lab

Experimental environment for developing K8s Ansible playbooks.

## Objectives

* Deploy local Minikube with VirtualBox and Ansible Tower with Vagrant/VirtualBox.
* Create a K8s Namespace.
* Cleanup the K8s Namespace.
* Cleanup local minikube and Ansible Tower.

## Getting Started

### Prerequisites

Install the following locally

1. [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
2. [Vagrant](https://www.vagrantup.com/downloads.html)
3. [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)

### Deploy local Minikube

Start a local Minikube instance.

```bash
$ minikube version
minikube version: v0.30.0

$ minikube start
Starting local Kubernetes v1.10.0 cluster...
Starting VM
.
.
.
Starting cluster components...
Kubectl is now configured to use the cluster.
```

Verify Minikube is running and configured for `kubectl`.

```bash
$ minikube status
minikube: Running
cluster: Running
kubectl: Correctly Configured: pointing to minikube-vm at IP_OMITTED

$ kubectl cluster-info
Kubernetes master is running at https://IP_OMITTED:8443
```

### Deploy local Ansible Tower

Use `Vagrantfile` included in `bu-toolbox/ansible/`.

```bash
$ pwd 
~/git/bu-toolbox/ansible/

$ vagrant up
.
.
.
```

Verify Ansible Tower VM is accessible.

```bash
$ vagrant ssh ansible-tower

[vagrant@ansible-tower ~]$ more /etc/redhat-release
CentOS Linux release 7.5.1804 (Core)
```

### Configure Minikube and Ansible Tower to talk

From the Vagrant host, run `setup-00-vagrant-host.sh`.  This will move all required Minikube certs, keys, and configs to the Ansible Tower synced folder. 

```bash
$ pwd
~/git//bu-toolbox/ansible/minikubeLab

$ ./setup-00-vagrant-host.sh
```

From the Ansible Tower VM, run `setup-01-vagrant-guest-ansible.sh`.  This will move all required Minikube files into the VM at the proper locations.

```bash
$ vagrant ssh ansible-tower

# now on the ansible-tower guest VM
$ /vagrant/minikubeLab/setup-01-vagrant-guest-ansible.sh

$ ls /home/vagrant/.kube/
ca.crt  client.crt  client.key  config
```

### Create a K8s Namespace

From the Ansible Tower VM, use `ansible-playbook` to create a new namespace on Minikube.

```bash
# executes locally using the openshift python package
$ export NS=bu-lab      # namespace name
$ export STATE=present  # ensure namespace exists
$ ansible-playbook /vagrant/minikubeLab/namespace-example.yaml -e k8s_ns=$NS -e ns_state=$STATE
# ansible output
.
.
.
PLAY RECAP ****************************************************************
localhost                  : ok=2    changed=1    unreachable=0    failed=0

```

Exit the Ansible Tower VM and verify Minikube has the new namespace.

```bash
[vagrant@ansible-tower ~]$ (ctrl + d)

$ kubectl get namespaces | grep bu-lab
bu-lab        Active   10s
```

### Cleanup the K8s Namespace

From the Ansible Tower VM, use `ansible-playbook` to remove the namespace from Minikube.

```bash
$ vagrant ssh ansible-tower
# now on the ansible-tower guest VM

# executes locally using the openshift python package
$ export NS=bu-lab     # namespace name
$ export STATE=absent  # ensure namespace DOES NOT exist
$ ansible-playbook /vagrant/minikubeLab/namespace-example.yaml -e k8s_ns=$NS -e ns_state=$STATE
# ansible output
.
.
.
PLAY RECAP ****************************************************************
localhost                  : ok=2    changed=1    unreachable=0    failed=0
```

Exit the Ansible Tower VM and verify the namespace doest not exist on Minikube.

```bash
[vagrant@ansible-tower ~]$ (ctrl + d)

$ kubectl get namespaces | grep bu-lab
# no output returns, coz it's deleted B)
```

### Cleanup local Minikube and Ansible Tower.

Run from the host of Minikube and Ansible Tower.

```
$ pwd
~/git//bu-toolbox/ansible/minikubeLab

$ minikube delete

$ vagrant destroy -f
```