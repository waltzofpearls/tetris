'use strict';

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
    'bootstrap': {'deps': ['jquery']}
  },

  paths: {
    'backbone': 'libs/backbone-1.1.2',
    'bootstrap': 'libs/bootstrap-3.3.1',
    'jquery': 'libs/jquery-1.11.1',
    'sinon': 'libs/sinon-1.14.1',
    'jasmine-sinon': 'libs/jasmine-sinon-0.4.0',
    'marked': 'libs/marked-0.3.3',
    'templates': '../templates',
    'underscore': 'libs/underscore-1.7.0',
    'domReady': 'libs/require-2.1.15/domReady',
    'text': 'libs/require-2.1.15/text'
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
