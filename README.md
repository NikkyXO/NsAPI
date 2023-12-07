<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## setup
npm i -g @nestjs/cli
nest new project-name


## To generate NestJS building blocks (module, service, controller classes) but also an entity class, DTO classes as well as the testing (.spec) files.
nest g resource

### To create a controller using the CLI
nest g controller [name]

### To create a service using the CLI
nest g service cats

### To create a module using the CLI
nest g module cats

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev


# Lint and autofix with eslint
$ npm run lint

# Format with prettier
$ npm run format

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


##  take advantage of express typings
npm install @types/express

## NOTE:  Classes are recommended for DTO Because
## TypeScript interfaces are removed during the transpilation, Nest can't refer to them at runtime.

## Directory structure
src
 - cats
    - dto
      - create-cat.dto.ts
    - interfaces
     - cat.interface.ts
  - cats.controller.ts
  - cats.module.ts
  - cats.service.ts
app.module.ts
main.ts


#### Object schema validation
The Zod library allows you to create schemas in a straightforward way, with a readable API.
 - npm install --save zod

### Class Validation
This use decorator-based validation. Decorator-based validation is extremely powerful

 - npm i --save class-validator class-transformer

## AUthentication and authorization with passport
Reference: https://docs.nestjs.com/recipes/passport


### install mysql package to use mysql for database
npm install mysql --save
npm install typeorm@latest @nestjs/typeorm@latest
npm install --save  mysql2


## To install swagger
npm install --save @nestjs/swagger
http://localhost:3000/api

npm run start

### Implementing Passport authentication/authorization strategy
npm install --save @nestjs/passport passport passport-local
$ npm install --save-dev @types/passport-local


### install jwt library
npm install --save @nestjs/jwt passport-jwt
npm install --save-dev @types/passport-jwt

### fixing errors
- **Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client**
- Reference: https://stackoverflow.com/questions/52815608/er-not-supported-auth-mode-client-does-not-support-authentication-protocol-requ


