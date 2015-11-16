# tetris-js

[![Build Status](https://travis-ci.org/waltzofpearls/tetris.svg)](https://travis-ci.org/waltzofpearls/tetris)

My personal website [tetris] built with the following technologies:

Languages:

* JavaScript
* Less

Environment:

* Node.js

Frameworks:

* Express
* Backbone.js
* Bootstrap

Libraries:

* Q
* D3.js
* jQuery
* Underscore
* RequireJS
* Cal-HeatMap

Testing:

* Karma
* Jasmine
* Mocha
* Chai
* Protractor

Building:

* Gulp
* Docker

Package managers:

* npm
* Bower

## Getting started

To clone, build and run the website, do as follows:

```
git clone git@github.com:waltzofpearls/tetris.git
cd tetris
npm run gulp
npm run production
```

To get Projects page properly working, a valid github personal access token
is needed, and it needs to be placed in the config file.

`cp config/dist.yml config/production.yml` and place the token at `github.token`
in the config file.

## Testing

```
npm install
npm run gulp test
```
