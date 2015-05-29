'use strict';

require(['/base/public/javascripts/config.js'], function() {
  var tests = [];
  for (var file in window.__karma__.files) {
    if (/spec\.js$/.test(file)) {
      tests.push(file);
    }
  }

  requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/public/javascripts/',

    shim: {
      'jasmine-sinon': {deps: ['sinon']},
      'jasmine-jquery': {deps: ['jquery']}
    },

    paths: {
      'sinon': 'libs/sinon-1.14.1',
      'jasmine-sinon': 'libs/jasmine-sinon-0.4.0',
      'jasmine-jquery': 'libs/jasmine-jquery-2.1.0'
    },

    // ask Require.js to load these files (all our tests)
    deps: [
      'jquery',
      'underscore',
      'backbone',
      'sinon',
      'jasmine-sinon',
      'jasmine-jquery'
    ].concat(tests),

    // start test run, once Require.js is done
    callback: window.__karma__.start
  });
});
