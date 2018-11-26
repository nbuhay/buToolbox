pipeline {

    // default agent is a VM with docker installed
    agent { node { label 'docker' } }
        
    stages {
    
        // compile source code into an executable
        stage('Build') {

            // run stage inside a specific docker image
            //   Note
            //      running container mounts to Jenkins workspace directory 
            //      changes from steps in this stage are available to downstream stages    
            agent {
                docker {
                    image 'maven:3-alpine'
                }
            }

            steps {
                
                checkout scm: [
                    $class: 'GitSCM',
                    userRemoteConfigs: [[  
                        url: 'https://github.com/nbuhay/bu-toolbox.git'
                    ]],                     
                ],
                poll: false
                
                sh 'cd spike/java/springboot && mvn -DskipTests install'

            }
        } // end Build stage

        // build Docker image with the Dockerfile
        stage('Containerize') {

            steps {

                script {
                    docker.build('nbuhay/spike-java-springboot:latest', 'spike/java/springboot')
                }

            }
        } // end Dockerize stage

        //  push Docker image to external Docker registry
        //      Note
        //          registry access pre-configured on Jenkins node
        stage('Release') {

            steps {

                script {
                    docker.image('nbuhay/spike-java-springboot:latest').push()
                }

            }

        } // end Release stage

        // remove Docker image from Jenkins node
        stage('Cleanup') {

            steps {

                sh 'docker rmi nbuhay/spike-java-springboot:latest'

            }

        } // end Cleanup stage

    } // end stages

}