pipline {

                    agent any

                    tools {nodejs "node"}

                stages {    
                    stage('cypress parallel tests') {

                        parallel {
                            stage('tester A') {
                                steps {
                                    sh "npm run cy:runGroups"
                                }
                            }

                    stage('cypress parallel tests') {

                        parallel {
                            stage('tester A') {
                                steps {
                                    sh "npm run cy:runGroups"
                            }
                        }
                    }
                }
            }
        }
    }
}

