---
author: "Me"
title: AWS APIGateway REST vs HTTP
date: 2023-08-04
description: Comparing AWS APIGateway REST vs HTTP
tags:
  - apigateway
---

AWS APIGateway offers two types of APIs: REST APIs and HTTP APIs. Each type has its own characteristics and use cases. Let's compare AWS Gateway REST API and HTTP API:

## Amazon API Gateway REST API:

1. **Features and Flexibility**: REST APIs provide more advanced features and flexibility. They support features like custom domain names, API stages, and more granular control over caching, request/response transformations, and security options.

2. **Use Cases**: REST APIs are suitable for complex use cases where you need fine-grained control over your API configuration, have existing RESTful services, or require advanced features like custom authorizers and VPC integration.

3. **Integration**: REST APIs support AWS Lambda, AWS Step Functions, HTTP endpoints, AWS services, and other AWS integrations.

4. **CORS**: Configuring Cross-Origin Resource Sharing (CORS) is done through method settings, allowing for more specific control over CORS behavior.

5. **Throttling**: Throttling can be customized per method using API Gateway's usage plans and API keys.

## Amazon API Gateway HTTP API:

1. **Simplified Configuration**: HTTP APIs offer a simpler and more streamlined configuration compared to REST APIs, making them quicker to set up.

2. **Use Cases**: HTTP APIs are well-suited for simpler use cases, single-page applications (SPAs), and mobile applications. They are ideal when you want to quickly expose HTTP endpoints without the need for complex configurations.

3. **Integration**: HTTP APIs support AWS Lambda and HTTP endpoints. The support for other AWS integrations is more limited compared to REST APIs.

4. **CORS**: CORS configuration is simplified and can be configured at the API level, allowing for easy handling of cross-origin requests.

5. **Throttling**: HTTP APIs provide automatic and default throttling settings based on the number of requests.

In summary, if you require advanced features, more customization, and have complex use cases, REST APIs are the way to go. On the other hand, if you need a simple and fast way to expose HTTP endpoints, especially for SPAs and mobile applications, HTTP APIs offer a more streamlined approach. Your choice will depend on your application's requirements, complexity, and the level of control you need over your API configuration.