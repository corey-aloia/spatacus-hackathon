# Spartacus

This project was generated following the spartacus install instructions: https://github.com/SAP/cloud-commerce-spartacus-storefront/wiki/Building-the-Spartacus-Storefront-from-Libraries

## Requirements
Angular CLI: v7.3.7 or later, < v8.0.0
node.js: v10 or later, < v12
yarn: v1.15 or later

## Connect to EC
`sshuttle -r $user@argonauts.jumpbox.yaas.io:1235 10.59.167.0/24`

## Install
`yarn install`

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## EC Username && password
To change, use the following impex:
```
INSERT_UPDATE OAuthClientDetails;clientId[unique=true]    ;resourceIds       ;scope        ;authorizedGrantTypes                                            ;authorities             ;clientSecret    ;registeredRedirectUri
                                ;client-side              ;hybris            ;basic        ;implicit,client_credentials                                     ;ROLE_CLIENT             ;secret          ;http://localhost:9001/authorizationserver/oauth2_implicit_callback;
                                ;mobile_android           ;hybris            ;basic        ;authorization_code,refresh_token,password,client_credentials    ;ROLE_CLIENT             ;secret          ;http://localhost:9001/authorizationserver/oauth2_callback;

```


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
