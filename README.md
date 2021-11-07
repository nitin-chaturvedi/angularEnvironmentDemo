# AngularEnvironmentDemo

This project demonstrates use of environment file in angular to inject parameters which are environment dependent eg. API base URL will be different in dev, qa and prod.

Use 'ng serve --configuration=envName' with different values for envName you have defined to see different params.

## For adding new environment in angular.json update
build element configurations section with file replacement and other needed params. This will be used during build ng build --configuration=envName.

serve element configuration section with file replacement and other needed params. This will be used during ng serve --configuration=envName

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Deploying in Heroku

### Configure Your Angular App to Deploy Properly on Heroku
The following are production-ready steps to easily and properly deploy your app without hitches.
Ensure you have the latest version of angular cli and angular compiler cli.
Install them into your application by running this commands in your terminal:

npm install @angular/cli@latest @angular/compiler-cli --save-dev

In your package.json, copy
"@angular/cli”: “1.4.9”,
"@angular/compiler-cli": "^4.4.6",
from devDependencies to dependencies

### Create postinstall script in package.json

Under “scripts”, add a “heroku-postinstall” command like so:

"heroku-postbuild": "ng build --prod"

This tells Heroku to build the application using Ahead Of Time (AOT) compiler and make it production-ready. This will create a dist folder where all html and javascript converted version of our app will be launched from.

### Add Node and NPM engines
You will need to add the Node and NPM engines that Heroku will use to run your application. Preferably, it should be same version you have on your machine. So, run node -v and npm -v to get the correct version and include it in your package.json file like so:

Copy typescript to dependencies.
Copy "typescript": "~2.3.3" from devDependencies to dependencies to also inform Heroku what typescript version to use.

### Install Server to run your app (http-server-spa)
https://www.npmjs.com/package/http-server-spa

you can use this server instead of own express server.

"heroku-postbuild": "ng build --prod && npm install http-server-spa -g"
//build angular and then install http-server-spa for acting as server

//start the build angular file in http-server-spa as a server
"start" : "http-server-spa dist/angularEnvironmentDemo index.html $PORT"
//$PORT comes from environment variable of heroku

### Install Server to run your app (Node server)
Locally we run ng serve from terminal to run our app on local browser. But we will need to setup an Express server that will run our production ready app (from dist folder created) only to ensure light-weight and fast loading.
Install Express server by running:
npm install express path --save
Create a server.js file in the root of the application and paste the following code.

Change start command
In package.json, change the “start” command to node server.js so it becomes:
"start": "node server.js"
Here’s what the complete package.json looks like. Yours may contain more depending on your application-specific packages.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
