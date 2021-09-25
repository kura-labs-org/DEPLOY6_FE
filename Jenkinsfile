pipeline {
  agent any
  stages {
    stage ('Build') {
      steps {
      sh 'rm -rf ./kura_test_repo/cypress2'
      sh '''
        npm install
        npm run build
        sudo npm install -g serve
        serve -s build
        '''
      }
    }
    stage ('test') {
      agent {
        label 'Jenkins Agent 2 (Dep6)'
      }
      steps {
      sh '''
        npm install cypress
        npm install mocha
        npx cypress run --spec \ ./cypress/integration/test.spec.js
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
