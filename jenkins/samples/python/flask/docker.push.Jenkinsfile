// requires login to Docker Hub with Docker CLI
pipeline {
    agent any
    stages {
        stage('Git') {
            steps {
                git 'https://github.com/nbuhay/bu-toolbox.git'
            }
        }
        stage('Build') {
            steps {
                sh 'ls -la'
                sh 'docker build -t nbuhay/spike-python-flask:latest spike/python/flask/'
            }
        }
        stage('Push') {
            steps {
                sh 'docker push nbuhay/spike-python-flask:latest'
            }
        }
        stage('Cleanup') {
            steps {
                sh 'docker rmi nbuhay/spike-python-flask:latest'
            }
        }
    }
}