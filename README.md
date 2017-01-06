# Bolgs 
This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.


## Set Up

Run `npm install`


## Build & development

Run `grunt` for building and `grunt dev` for preview.

## Getting Started
## Installing Yeoman

Open your Terminal/Shell and type:

npm install -g yo

Installing the ANGM Generator
To install generator-angm from npm, run:

npm install -g generator-angm

Installing bower-installer
npm install -g bower-installer

The building process will use bower-installer plugin.

## Starting an application
From the command line, initiate the generator:

yo angm

You'll receive some prompts to fill with useful informations as Project name, author, what UI: Bootstrap or Angular Material.

## Running project on development
Open your Terminal/Shell and type:

grunt dev

After the command your application should start right in your default browser at localhost:4000.

NOTE: after using yo angm command, we recorded some useful informations on .yo-rc.json file created at the project root folder. So you can't execute the generator command to create the application more than one time per folder!

## Running project on production
Open your Terminal/Shell and type:

grunt build

The Gruntfile.js already have some tasks like: Concat, Uglify, Injector and template cache.

NOTE: The command will concat and minify all (JS) application files and the HTML templates will be mixed in on file called templates.js, all this files will be injected on index.html.


## Testing

Running `npm test` will run the unit tests with karma.