'use strict';

module.exports = function(config) {
  config.set({
    basePath: '../',

    files: [
      {pattern: 'public/javascripts/**/*.js', included: false},
      {pattern: 'tests/unit-bjs/**/*_test.js', included: false},
      'tests/test-main.js'
    ],

    exclude: [
      'public/javascripts/main.js'
      'public/javascripts/main.min.js'
      'public/javascripts/libs/require-2.1.15/require.min.js'
    ],

    singleRun: false,
    autoWatch: true,

    frameworks: ['jasmine', 'requirejs'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-requirejs'
    ]
  });
};
