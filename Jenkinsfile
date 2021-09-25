pipeline {
  agent{

    label 'Agent One'

  }
  triggers {
    pollSCM('')
  }
  stages {
    stage ('Build') {
      
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
            npx cypress run --spec ./cypress/integration/test.spec.js
            '''
        }

      }
      
      post {
        always {
           dir('./kura_test_repo'){
            junit 'results/cypress-report.xml'
           }
        }
      }
    }
  }
}
