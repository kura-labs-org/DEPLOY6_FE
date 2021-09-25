pipeline {
  agent any
  stages {
    stage ('Build') {
      steps {
      sh 'rm -rf ./kura_test_repo/cypress2'
      sh '''
        npm install
        '''
      }
    }
    stage ('Second') {
      agent {
        label 'agent3'
      }
      steps {
      sh ''' 
        npm install cypress
        npm install mocha
        sudo npm install -g serve
        serve &
        npx cypress run --spec ./cypress/integration/test.spec.js
        '''
      }
      post {
        always {
          junit 'results/cypress-report.xml'
        }
          
      }
    }
  }
} 
