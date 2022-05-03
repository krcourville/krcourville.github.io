---
layout: post
categories: projects portfolio
---

## Contents

- TOC
  {:toc}

## Introduction

Hello! How are you?

Below, you will be able to explore some of the more recent projects.

## My Resume

Please find my résumé here : [https://www.coderken.com/cv/](/cv/)

## Social Links

- Twitter: @krcourville
- LinkedIn: <https://www.linkedin.com/in/ken-courville-5220734/>

## More About Me

- [About Ken](https://youtu.be/OW6yPJLEgt8)
  : An intro video I put together a while back. I do not run anymore and stick to low-impact activities.
- [Github account](https://github.com/krcourville)
  : Mostly, this is my playground for coding.

## Cloud Platform Engineering

May 2020 - Now

- Provided mentoring and guidance for ~9 development teams and documented best practices regarding, but not limited to:
  - Evaluation and usage of "right fit" AWS services
  - Building CI and CD pipelines
  - Building resilient solutions (logging, metrics, alarms, scaling, graceful degradation)
- Worked closely with the Architecture team to identify and address common issues.
- Developed tools, services, and re-usable CloudFormation templates to address said issues.

### Accomplishments

- Improved visibility of CPE Team.
- Identified and deprecated unnecessary services to reduce
  AWS costs and complexity and free up developer time.
- Identified and addressed unnecessary cloud service costs.
- Used tools, such as Jupyter, to perform data analysis across multiple AWS accounts for:
  - impact analysis
  - usage analysis
  - progress monitoring on efforts

### Tech used

- Languages: Python, C#

* Terraform
* AWS: Lambda, Cloudformation, SNS, SQS, Cloudfront, Kinesis Data Streams, ECS/Fargate, CodePipeline, CodeBuild, CloudWatch, Route53, DynamoDB
* InfluxDB
* Docker
* Splunk
* Testing: unit, integration, e2e, performance/load

## Elasticsearch 5.4 to 7 Upgrade

Released: April 2021

### Tech Used

- Languages: Python, C#

* Elasticsearch
* AWS: Lambda, Cloudwatch, EC2, Route53, Cloudfront, EFS
* Docker
* Testing: unit, integration, e2e, performance/load

### Accomplishments

- Migrated a 3-node Elasticsearch cluster to version 7 with zero downtime and minimal incidents post-release.
- Pushed through and completed a project that had stalled after 1/2 year.
- Upgrade to ES7 resulted in lower average CPU utilization of EC2 cluster.
- Updated Python-based CI process to perform ES index configuration updates with zero downtime.
- Migrated the C#-based API from Docker/EC2 to Lambda
  - Greatly reduced complexity and increased scalability of deployment.
  - Slightly reduced the average latency for job search API calls.
- Reviewed and patched up monitoring.

## Candidate Profile Refresh

Released: March 2021

### Tech Used

- Languages/runtimes: Python, Typescript, nodejs
- HTML, CSS, Web Components (standard)
- Stencil
- Cypress
- jest
- webpack
- AWS: Lambda, AppSync (AWS GraphQL implementation), S3, CloudFront, Route53, DynamoDB
- Testing: unit, integration, e2e

### Accomplishments

- Awarded for helping to complete a delayed, high-priority project.
- Quickly established rapport in a team of 10 developers.
- Identified and addressed inefficiencies in the codebase and developer workflows.
- Quickly learned chosen backend and frontend technologies to provide effective mentoring and code reviews for peers, freeing up other tech leads to focus on big picture tasks.
- Developed, from scratch, re-usable web components while applying accessibility guidelines. Examples: autocomplete/typeahead, progress circle
- Utilized CSS custom props to allow components to be themed.

## Job Alerts

Multiple releases: 2019-2020

### Tech Used

- Languages: Python, C#, Typescript, nodejs
- Angular
- AWS: Lambda, DynamoDB, Step Functions, SNS, SQS
- Sparkpost

* Testing: unit, integration, e2e, performance/load

### Accomplishments

- Designed and implemented a multi-tenant microservice for persistence and
  execution of > 1.5 million job alerts for dice.com and efinancialcareers.com
- Created event-driven integration with candidate accounts, preferences, and profiles to augment job alerts.
- Migrated > 3 million job alerts (active and inactive) from
  legacy systems to the new platform.
- Identified metrics and created reporting to track job alert feature usage and identify areas for improvement.

## Easy Photo Downloader

> NOTE: In February 2022, Meetup changed its API to GraphQL (not a big deal) and made it available only to paid members (big deal). Based on this change and after considering a cost-benefit analysis of this project, `Easy Photo Downloader` has been unpublished and is no longer supported. However, source code is available upon request.

### Highlights

- Published: Feb 2018
- Landing Page: <https://easydownload.photos>
- Commercialized version of previously open-sourced project: [meetup-photo-download](https://github.com/krcourville/meetup-photo-download)

### Tech Used

- Languages/runtimes: JavaScript, nodejs
- HTML, SASS
- Vue
- Vuetify
- Material Design
- Microsoft App Store
- Electron

### Accomplishments

- Successfully published an app and gained valuable experience regarding commercialized app development: design, distribution, maintenance, customer support.
- Yearly revenue: $100-200 (yes, there is no "K" in this value)

## Job Search

Multiple Releases: 2018-2019

### Tech Used

- Languages: Python, C#, Typescript, nodejs
- Angular
- AWS: EC2, Lambda, DynamoDB, SNS, SQS
- Sparkpost
- Solr
- Elasticsearch

* Docker
* Testing: unit, integration, e2e, performance/load

### Accomplishments

- Migrated job indexing solution from Solr to a 3-node Elasticsearch cluster.
- Applied best practices to ensure ES cluster was fault-tolerant across availability zones.
- Migrated job search index from dice.com legacy services to a multi-tenant solution, shared with efinancialcareers.com.
- Created a new job ingestion pipeline using event-driven practices.
- Created tooling to assist in debugging search result relevance using visualization, http://splainer.io, and equivalence classes.

### MilesAhead

Proof of Concept Released: 2017

### Tech Used

- Languages/runtime: nodejs, JavaScript
- Vue, Veutify
- HTML, SASS
- Azure: web applications
- feathers.js
- WebSockets
- Android
- Push notifications
- Cordova

### Accomplishments

- Utilized lessons learned from the [Blue Dot Cyan platform](https://www.bluedotsolutions.com/cyan-stack/) to bootstrap [MilesAhead](https://www.bluedotsolutions.com/milesahead-drive/) project to a functional proof-of-concept.
- Migrated from basic authentication to federated, claims-based authentication.
- Migrated from polling mechanisms to real-time and push to improve UX and bandwidth utilization.
- Created a new mobile client with integrated and optimized mapping services.
- Created three web clients for reporting, monitoring, and administration of MilesAhead services.
- Created shared UI and auth components for use in web and mobile clients.
- Implemented a generic configuration system to enable customers to customize client display options and terminology.

## Miami Dade County Water and Sewer Department

Multiple releases: 2016-2017

### Highlights

- [Video Demo](https://youtu.be/3GsKdNkl3Fg) (Yes, those are my fingers)

### Tech Used

- AngularJS
- Languages/runtimes: TypeScript, C#, nodejs
- Angular Material
- GIS
- Infor EAM
- Cordova
- Azure

### Accomplishments

- Created a custom Work Management mobile client with integrations to
  Infor EAM and [Blue Dot Cyan platform](https://www.bluedotsolutions.com/cyan-stack/).
- Integrated offline GIS data to allow side-by-side viewing of assets and work orders.
