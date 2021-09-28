# DEPLOY6_FE
<h1 align=center>Deployment 6</h1>

Welcome to deployment 6, for this deployment you will need to follow the directions in the deployment6.pdf.    

- Be sure to include the following below in your pull request: 

***Requirements:*** 
- [x]Document issues and anything you decided to do different..
- [x]Generate a failed and passed test.
- [x]Take a screenshots of your failed and passed test.
- [x]Locate and upload cypress's screenshot and video of the headless browser test. 

👉Link to deployment instructions: [here](https://github.com/kura-labs-org/DEPLOY6_FE/blob/main/Deployment%236.pdf)  



# Documentation of Deployment 6 - React App

*This is the sixth deployment homework from [kura labs](https://github.com/kura-labs-org/DEPLOY6_FE).*

**See [Deploy6](https://github.com/ibrahima1289/Deploy6) repository for video and screenshot of the headless browser test.**

## 1. Configure EC2 on AWS:

**1.1** The first EC2 is the master where **Jenkins** is installed (Linux environment).

Configure the Security Groups (SG):

For the inbound rule: open port 22, and 8080<br>
For the outbound rule: open all ports.

SSH into the **master**:

![](/images/Deplo6_ssh1.PNG)

Intalling **Jenkins** in an EC2 using bash script

```
	#!/bin/bash
	sudo amazon-linux-extras install java-openjdk11
	sudo amazon-linux-extras install epel
	sudo wget -O /etc/yum.repos.d/jenkins.repo \
	https://pkg.jenkins.io/redhat-stable/jenkins.repo
	sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
	sudo yum upgrade -y
	sudo yum install epel-release java-11-openjdk-devel -y
	sudo yum install jenkins -y
	sudo systemctl start jenkins
```

Once **Jenkins** is installed, log in with the admin password to create an account.

Here is the bash script to find the admin password:

```
	#!/bin/bash
	sudo systemctl status jenkins
	sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

Now, install these plugins in **Jenkins**: NodeJs, EC2 plugins, and Maven.

Create the agents: you can find how to create agents in the [documentation](https://github.com/kura-labs-org/DEPLOY5_AWS/blob/main/Deployment%235.pdf) of the deployment 5.

**1.2** The second EC2 is the first agent (Ubuntu OS)

Configure the Security Groups (SG):

For the inbound rule: open port 22, and 5000<br>
For the outbound rule: open all ports.

SHH into the first agent:

![](/images/Deplo6_ssh2.PNG)

Install requirements for Ubuntu EC2 - also called **agent 1** using bash script.

```
  #!/bin/bash
  sudo apt-get update && sudo apt-get upgrade -y
  sudo apt-get install -y \
  default-jre \
  git \
  nodejs -y \
  npm -y
```

**1.3** The third EC2 is the second agent (Ubuntu OS)

For the inbound rule: open port 22<br>
For the outbound rule: open all ports.

SHH into the second agent (same method as agent 1):

Requirements for Ubuntu EC2 - also called **agent 2** using bash script..

```
  #!/bin/bash
  sudo apt-get update && sudo apt-get upgrade -y
  sudo apt-get install -y \
  default-jre \
  git \
  nodejs \
  npm \
  maven \
  libgtk2.0-0 \
  libgtk-3-0 \
  libgbm-dev \
  libnotify-dev \
  libgconf-2-4 \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  xauth \
  xvfb
```

Now, you will see on your **Jenkins** console all three EC2s connected as shown below.

![](/images/Deplo6_1.PNG)

## 2. Fork the [repository](https://github.com/kura-labs-org/DEPLOY6_FE) where the codes are.

**2.1** Create a new repository (I named it [Deploy6](https://github.com/ibrahima1289/Deploy6))

Remove `PDF`, and `README` files.

**2.2** Create the **[Jenkinsfile](https://github.com/ibrahima1289/Deploy6/blob/main/Jenkinsfile)**.

*I placed all the files and folders from the original [repository](https://github.com/kura-labs-org/DEPLOY6_FE) in the root directory to avoid errors.*

**2.3** Create a job in **Jenkins** and build it.<br>
Here is the result:

![](/images/Deploy6_1.PNG)

**2.4** Make a failed test.

For this, we will alter the result `My Awesome Web Application` into `Awesome Web Application` for the heading.<br>

Here is the result:

![](/images/Deploy6_4.PNG)

After we fix it again, the buid is successfull.

![](/images/Deploy6_5.PNG)

## 3. Find and upload the video and screenshot files.

We will follow the procedure below:

**Step 1**: First, locate the video and screenshot files.

```
$ find /home -name *.mp4
```
![](/images/Deploy6_8.PNG)

**Step 2**: Move the files into the folder Deploy6.

```
$ cd /home/ubuntu/jenkins/workspace/Jk-Pipeline_main/cypress
$ mv videos screenshots videos 
$ cd ~/Deploy6
```
![](/images/Deplo6_ssh5.PNG)

**Step 3**: SSH into Github [repository](https://github.com/ibrahima1289/Deploy6) from agent 2.<br>
For this, follow these instructions.

Generate a ssh key for the agent.

```
$ cd ~
$ ssh-keygen
$ ls
$ cat deploy6.pub
```
![](/images/Deploy6_ssh8.PNG)

Now, go to your github account > `settings` > `SSH and GPG keys` > `New SSH key`

Copy and paste public key (deploy6.pub)

Click > `Add SSH key`

![](/images/Deplo6_6.PNG)

Go back to the terminal, type the commands below to ssh into the github [repository](https://github.com/ibrahima1289/Deploy6).

```
$ eval `ssh-agent -s`
$ ssh-add deploy6
```

![](/images/Deplo6_ssh3.PNG)

Clone github account [repository](https://github.com/ibrahima1289/Deploy6).

Go to the [repo](https://github.com/ibrahima1289/Deploy6) and copy the **URL** where the repo is located.<br>
You can also do this by copying the SSH link shown in the picture below.

![](/images/Deploy6_10.PNG)

```
$ git clone git@github.com:ibrahima1289/Deploy6.git
$ ls
```

![](/images/Deplo6_ssh4.PNG)


Now, upload the video and screenshot found in Deploy6 into the github repository [Deploy6](https://github.com/ibrahima1289/Deploy6).<br>
Follow the command below.

```
$ git add .
$ git commit -m "adding videos and scrennshots to repo"
$ git pull
$ git push origin main
```

![](/images/Deplo6_ssh6.PNG)
![](/images/Deplo6_ssh7.PNG)



## Troubleshooting:

Before I was able to continue this deployment, I had many failing builds at the test phase of the pipeline. With my co-workers ([Sai](https://github.com/SaiHoYip) and [Ricardo](https://github.com/Deodutt), I was able to identify that in the Jenkinsfile, I needed to update the first agent ( wich I had `agent any` instead of what is in the picture below.

![](/images/Deploy6_11.PNG)
