pipeline {
  agent any
  triggers {
    pollSCM('')
  }
  stages {
    stage ('Build') {
      agent{
        label 'Agent One'
      }
      steps {
        sh 'rm -rf ./kura_test_repo/cypress2'
        dir('./kura_test_repo'){
          sh '''
            npm install
            npm run build
            sudo npm install -g serve
            serve -s build &
            '''
        } 
        
      }
    }
    stage ('Test') {
      agent {
        label 'Agent Two'
      }
      steps {
        dir('./kura_test_repo'){
          sh '''
            npm install cypress
            npm install mocha
            npx cypress run --env ip_addy=3.140.208.112 --spec ./cypress/integration/test.spec.js
            '''
        }

      }
      
      post {
        always {
          junit 'results/cypress-report.xml'
        }
      }
    }
  }
}
