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
      // 'cal-heatmap': {deps: ['d3']},
      'jasmine-sinon': {deps: ['sinon']},
      'jasmine-jquery': {deps: ['jquery']}
    },

    paths: {
      // 'cal-heatmap': '../bower/cal-heatmap/cal-heatmap',
      // 'd3': '../bower/d3/d3',
      'jasmine-jquery': '../bower/jasmine-jquery/lib/jasmine-jquery',
      'jasmine-sinon': '../bower/jasmine-sinon/lib/jasmine-sinon',
      'sinon': '../bower/sinonjs/sinon',
      'squire': '../bower/squire/src/Squire'
    },

    deps: [
      'backbone',
      // 'cal-heatmap',
      'jasmine-jquery',
      'jasmine-sinon',
      'jquery',
      'sinon',
      'underscore'
    ]
  });
});

// ask Require.js to load these files (all our tests)
require(tests, function() {
  window.__karma__.start();
});
