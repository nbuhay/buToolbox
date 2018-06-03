pipeline {
    agent any
    stages {
        stage('Cleanup') {
            steps {
                sh 'if docker ps --filter name=python | grep python; then docker stop python && docker rm python; fi'
            }
        }
        stage('Git') {
            steps {
                git 'https://github.com/nbuhay/bu-toolbox.git'
            }
        }
        stage('Build') {
            steps {
                sh 'ls -la'
                sh 'docker build -t nbuhay/jenkins-pipeline/python:latest spike/python/flask/'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker run -d -p 8081:8080 --name python nbuhay/jenkins-pipeline/python:latest'
            }
        }
    }
}