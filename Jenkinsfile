pipeline {
  agent {
    label 'AgentBuild'
  }
  stages {
    stage ('Build') {
      steps {
      sh 'rm -rf $(pwd)/cypress'
      sh '''
        npm install
        npm run build
        sudo npm install -g serve
        serve -s build&
        '''
      }
    }
    stage ('Test') {
      agent {
        label 'AT'
      }
      steps {
      sh ''' 
        npm install cypress
        npm install mocha
        npx cypress run --spec ./cypress/integration/test.spec.js
        echo $HOSTNAME "Running test"
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
