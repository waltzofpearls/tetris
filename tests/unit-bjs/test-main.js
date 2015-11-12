'use strict';

var tests = [];
for (var file in window.__karma__.files) {
  if (/spec\.js$/.test(file)) {
    tests.push(file);
  }
}

// The following 3 lines solves the AMD issue with
// Cal-HeatMap, which loads d3 with require("d3"),
// and requirejs doesn't play nice with this kind
// of script load when it's outside define().
var require = function(name) {
  return window[name];
};

requirejs(['/base/public/javascripts/src/config.js'], function() {
  requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/public/javascripts/src/',

    shim: {
      'jasmine-sinon': {deps: ['sinon']},
      'jasmine-jquery': {deps: ['jquery']}
    },

    paths: {
      'jasmine-jquery': '../bower/jasmine-jquery/lib/jasmine-jquery',
      'jasmine-sinon': '../bower/jasmine-sinon/lib/jasmine-sinon',
      'sinon': '../bower/sinonjs/sinon',
      'squire': '../bower/squire/src/Squire'
    },

    deps: [
      'backbone',
      'jasmine-jquery',
      'jasmine-sinon',
      'jquery',
      'sinon',
      'underscore'
    ]
  });
});

// ask Require.js to load these files (all our tests)
requirejs(tests, function() {
  window.__karma__.start();
});
