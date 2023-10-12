---
author: "Me"
title: Deploying an react app on AWS using S3 and CloudFront
date: 2023-09-01
description: Deploying an react app on AWS using S3 and CloudFront
tags:
  - architecture
---

## Introduction

Deploying a React app in a scalable and secure manner is crucial. Amazon Web Services (AWS) offers a combination of Amazon S3 for static web hosting and AWS CloudFront as a content delivery network (CDN) to ensure efficient content distribution. In this article, we'll walk you through deploying a React app on AWS S3 with AWS CloudFront for optimal performance and security.

## Steps to Deploy a React App on AWS S3 with AWS CloudFront:

### 1. **Build Your React App**:

   Navigate to your React app's directory and build the production-ready bundle by running:

   ```
   npm run build
   ```

### 2. **Create an S3 Bucket**:

   - Log in to the AWS Management Console.
   - Open the Amazon S3 service.
   - Create an S3 bucket and name it as your domain (e.g., `yourdomain.com`). Ensure public access settings are properly configured.

### 3. **Upload Files to S3 Bucket**:

   - Upload the contents of the `build` directory generated in step 1 to your S3 bucket.

### 4. **Enable Static Website Hosting**:

   - In the S3 bucket settings, enable static website hosting. Specify the index and error documents (typically `index.html` and `index.html`).

### 5. **Set Permissions**:

   - In your S3 bucket, configure the permissions to allow public access. Create a bucket policy that makes your content public

### 6. **Create an AWS CloudFront Distribution**:

   - Go to AWS CloudFront in the AWS Management Console.
   - Create a new distribution with your S3 bucket as the origin. Choose the Web distribution type.

### 7. **Set Default Root Object**:

   - In the CloudFront distribution settings, set the default root object to `index.html`.

### 8. **Configure SSL Certificate (Optional)**:

   - You can set up a custom SSL certificate for your domain using AWS Certificate Manager if you need HTTPS support.

### 9. **Update Domain DNS**:

   - Update your domain's DNS settings to point to the CloudFront distribution URL provided.

### 10. **Wait for DNS Propagation**:

   - DNS changes may take some time to propagate. Be patient and allow time for the changes to take effect.

### 11. **Access Your React App**:

   - Once the DNS has propagated, your React app should be accessible via your domain over HTTPS if you set up an SSL certificate.

## Benefits of Deploying on AWS S3 with AWS CloudFront:

- **Scalability**: AWS CloudFront automatically scales to handle traffic spikes, ensuring a responsive React app.

- **Global Distribution**: With CloudFront's global network of edge locations, your app is served quickly to users around the world.

- **Security**: AWS S3 and CloudFront provide security features to protect your app from common web security threats.

- **Low Latency**: Edge locations ensure low latency and faster load times for your React app.

- **Cost Efficiency**: You only pay for the data transfer and requests you use, making it a cost-effective solution.

## Conclusion

Deploying a React app on AWS S3 with AWS CloudFront is an excellent choice for achieving a scalable and secure web application. This setup leverages the power of a content delivery network to provide low latency and global distribution. As your application grows, it can seamlessly handle increasing traffic while maintaining the highest level of security and reliability.