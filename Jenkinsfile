pipeline {
  agent {
    label 'agent2'
  }
  stages {
    stage ('Build') {
      steps {
      sh 'rm -rf ./cypress2'
      sh '''
        npm install
        npm run build
        sudo npm install -g serve
        serve -s build &
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
        npx cypress run --spec ./cypress/test.spec.js
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
