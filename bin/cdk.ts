#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkStack } from '../lib/cdk-stack';
import * as dotenv from 'dotenv';
dotenv.config()

const envSetup = {
    region: process.env.AWS_DEFAULT_REGION,
    account: process.env.AWS_DEFAULT_ACCOUNT
}

console.log('Configuration: {}', JSON.stringify(envSetup))

const app = new cdk.App();
new CdkStack(app, 'CdkStack', { env: envSetup});
