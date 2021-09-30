# Documentation

Initially SShing into the instance wasnt connecting because of the usually command of ssh -i pem.file ec2-user@(publicipaddress) 
a change had to be made which was ssh -i (pem.file) ubuntu@(publicipaddress)
An initial issue was Building the Agent2. What needed to be changed was the label in the code. Next, the build itself was failing because java 
needed as well as few othwer dependencies. Also some of the commands weren't working because of the instead of the "sudo yum " sudo apt was needed 
because instead 

```
sudo apt update

sudo apt install default-jre git nodejs npm

sudo apt-get -y install libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

```

In the line of code below, the & symbol needed to be added because when jenkins runs

the serve -s build code without the & symbol Jenkins will get stuck because it was already running a server.


```
  }
  stages {
    stage ('Build') {
      steps {
      sh 'rm -rf ./kura_test_repo/cypress2'
      sh '''
        npm install
        npm run build
        sudo npm install -g serve
        serve -s build * & *
        '''
      }
```


In order to fix we had to include & in order to fix the server that was running


Failed build was created based on string was tested and found My E Application instead of My Awesome Web Application (the strings didn’t match)



