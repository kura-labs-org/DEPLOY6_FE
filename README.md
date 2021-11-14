Deployment 6

Goals of the Deployment:
- Have master ec2 orchestrate building and testing in different agents
- Testing would be done on the “testing” agent using cypress
- Have one successful test and one failed test

For more details on the deployment, you can look [here](https://github.com/KennethT404/DEPLOY6_FE/blob/main/Deployment%206%20Documentation%20-%20Ken.pdf) for more!
Instructions for the deployment can be found [here](https://github.com/KennethT404/DEPLOY6_FE/blob/main/Deployment%236.pdf)

This deployment was a demonstration of Masters and Agents can be used for different envrionemtns for an appliction. In this case there was a test agent anda build agent. This is meant to simulate what Dev and Production environments at an enterprise level would function. This was done in Jenkins because of its ability to easily implement agent nodes to work with the master node it is hosted on. 

The reason for this seperation is to ensure that changes that may break the app do not get shown or interfere with the live application being served. This also allows for developers to conduct different types of testing such as additonal features or new UI. 
