# AWS-CDK TypeScript Bootrtrap Project

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`CdkStack`)

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Install aws-cdk globally
```bash
npm i -g aws-cdk
```

## Env file setup
```bash
cp .env.example .env
```
Update the `.env` content with your account information

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Export aws access and secrets keys

```bash
export AWS_ACCESS_KEY_ID={aws-access-key-id} && export AWS_SECRET_ACCESS_KEY={aws-secret-access-key}
```

## Deploy the stack

```bash
cdk deploy
```

## Destroy the stack

```bash
cdk destroy
```
