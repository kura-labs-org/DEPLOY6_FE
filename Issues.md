# Documentation

The initial ssh into the instance wasnt connecting because of the usually command of ssh -i pem.file ec2-user@(publicipaddress)
a change had to be made which was ssh -i (pem.file) ubuntu@(publicipaddress).
My first issue was building the Agent2. What needed to be changed was the label in the code. Next, the build itself was failing because java 
needed to be downloaded on the server as well as few other dependencies. Also some of the commands weren't working because of the instead of the "sudo yum " sudo apt was needed. These following commands worked to install the neccessary dependencies.

```
sudo apt update

sudo apt install default-jre git nodejs npm

sudo apt-get -y install libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

```

In the line of code below, the & symbol was added because when jenkins runs

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

A failed build was created based on string was tested and found "My E Application" instead of "My Awesome Web Application" (the strings didn’t match).



