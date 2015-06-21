'use strict';

var tests = [];
for (var file in window.__karma__.files) {
  if (/spec\.js$/.test(file)) {
    tests.push(file);
  }
}

require(['/base/public/javascripts/src/config.js'], function() {
  requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/public/javascripts/src/',

    shim: {
      'jasmine-sinon': {deps: ['sinon']},
      'jasmine-jquery': {deps: ['jquery']}
    },

    paths: {
      'sinon': '../bower/sinonjs/sinon',
      'jasmine-sinon': '../bower/jasmine-sinon/lib/jasmine-sinon',
      'jasmine-jquery': '../bower/jasmine-jquery/lib/jasmine-jquery',
      'squire': '../bower/squire/src/Squire'
    },

    deps: [
      'jquery',
      'underscore',
      'backbone',
      'sinon',
      'jasmine-sinon',
      'jasmine-jquery'
    ]
  });
});

// ask Require.js to load these files (all our tests)
require(tests, function() {
  window.__karma__.start();
});
