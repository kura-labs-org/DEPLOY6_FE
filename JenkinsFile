pipeline {
  agent any
  stages {
    stage ('Build') {
      agent{
        label 'Agent One'
      }
      steps {
      sh 'echo Running Build on Agent One1'
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
