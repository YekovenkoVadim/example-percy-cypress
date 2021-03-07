pipline {
            agent any
                tools {nodejs 'node'}
                stages {    
                    stage('cypress parallel tests') {
                        parallel {
                            stage('Slave Node1') {
                                agent {
                                    label 'remote_node1'
                                }
                                steps {
                                    git url: 'https://github.com/YekovenkoVadim/example-percy-cypress.git'
                                    bat 'npm install'
                                    bat 'npm update'
                                    bat "npm run cy:runFunctionalTestAndCyDashboard"
                                }
                            }
                            stage('Slave Node2') {
                                agent {
                                    label 'remote_node2'
                                }
                                steps {
                                    git url: 'https://github.com/YekovenkoVadim/example-percy-cypress.git'
                                    bat 'npm install'
                                    bat 'npm update'
                                    bat "npm run cy:runFunctionalTestAndCyDashboard"

                                }
                                    
                            }
                        }
                    }
                }           
}


