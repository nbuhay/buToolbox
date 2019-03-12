// reference doc: https://jenkins.io/doc/tutorials/build-a-node-js-and-react-app-with-npm/
pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }
  }
  stages {
    stage('Git') {
      steps {
        git 'https://github.com/nbuhay/bu-toolbox.git'
      }
    }
    stage('Build') {
      steps {
        sh 'npm install spike/nodejs/'
      }
    }
  }
}