'use strict';

module.exports = function(config) {
  config.set({
    basePath: '../',

    files: [
      {pattern: 'public/javascripts/bower/backbone/backbone.js', included: false},
      {pattern: 'public/javascripts/bower/bootstrap/dist/js/bootstrap.js', included: false},
      {pattern: 'public/javascripts/bower/d3/d3.js', included: false},
      {pattern: 'public/javascripts/bower/requirejs-domready/domReady.js', included: false},
      {pattern: 'public/javascripts/bower/jquery/dist/jquery.js', included: false},
      {pattern: 'public/javascripts/bower/marked/lib/marked.js', included: false},
      {pattern: 'public/javascripts/bower/requirejs-text/text.js', included: false},
      {pattern: 'public/javascripts/bower/underscore/underscore.js', included: false},
      {pattern: 'public/javascripts/bower/sinonjs/sinon.js', included: false},
      {pattern: 'public/javascripts/bower/jasmine-sinon/lib/jasmine-sinon.js', included: false},
      {pattern: 'public/javascripts/bower/jasmine-jquery/lib/jasmine-jquery.js', included: false},
      {pattern: 'public/javascripts/bower/squire/src/Squire.js', included: false},
      {pattern: 'public/javascripts/src/**/*.js', included: false},
      {pattern: 'public/templates/**/*.html', included: false},
      {pattern: 'public/images/**/*.gif', included: false},
      {pattern: 'public/images/**/*.png', included: false},
      {pattern: 'public/data/**/*.json', included: false},
      {pattern: 'tests/unit-bjs/**/*.spec.js', included: false},
      {pattern: 'tests/unit-bjs/**/*.json', included: false},
      'tests/unit-bjs/test-main.js'
    ],

    exclude: [
      'public/javascripts/src/main.js'
    ],

    singleRun: true,
    autoWatch: false,

    frameworks: ['jasmine', 'requirejs'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-requirejs'
    ],

    reporters: ['dots'],

    proxies: {
      '/images/spinner1.gif': '/base/public/images/spinner1.gif',
      '/data/resume.json': '/base/tests/unit-bjs/mocks/resume.json',
      '/api/projects': '/base/tests/unit-bjs/mocks/projects.json',
      '/api/contributions': '/base/tests/unit-bjs/mocks/contributions.json'
    }
  });
};
