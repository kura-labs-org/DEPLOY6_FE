pipeline {
  agent none
  stages {
    stage ('Build') {
      agent{
        label 'Agent One'
      }
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
        label 'Agent Two'
      }
      steps {
      sh '''
        echo Running Test on Agent Two
        '''
      }
    }
  }
}
