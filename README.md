# LAB - Class 16

## Project: Cloud Server

### Author: Bryan O. Garduno Gonzalez

### Problem Domain

The objective is to establish and manage environments through AWS Elastic Beanstalk for a Node.js application. Initially, configure an environment using the AWS Management Console. This step involves a manual deployment of a basic Node.js server by uploading a ZIP file. Following this, the task extends to creating an identical environment using AWS Elastic Beanstalk, but this time utilizing command-line operations. Conclude by manually deploying the application to this newly configured environment employing the `eb deploy` command.


### Links and Resources

- [GitHub Actions ci/cd]() 
- cloud-server [GUI deployment url](http://cloud-server-lab-env.eba-kshaxdyh.us-east-1.elasticbeanstalk.com/)
- cloud-server [CLI deployment  url](http://cloud-server2-dev.us-east-1.elasticbeanstalk.com/)

### Collaborators

- **ChatGPT by OpenAI**: Used as a programming partner for brainstorming ideas, debugging code, formulating tests, and drafting documentation. ChatGPT's contributions were invaluable in enhancing the efficiency and quality of the development process.

### Setup

#### `.env` requirements (where applicable)

A .env file is included in local repository. A .env-sample file is uploaded to the remote repo so collaborators understand what environmental variables are being used. 

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

### Process

#### Manual Deployment by Uploading a ZIP File
1. **Create an Application:** Navigate to the Elastic Beanstalk console and initiate a new application setup.
2. **Select Application Type:** Choose 'Node.js' as the application type for your deployment.
3. **Upload Application Files:** Upload a ZIP file containing the `server.js` and `package.json` files to Elastic Beanstalk.

#### Deploying the App Using Terminal
1. **Initialize Application:** Use the `eb init` command in the terminal to start the application creation process.
2. **Terminal Prompts:** Follow the prompts in the terminal to configure your application settings.
3. **Create Environment:** Employ the `eb create` command to establish a new environment for your application.
4. **Deploy Changes:** After making any modifications to your application, apply the `eb deploy` command to deploy these changes to the environment.









