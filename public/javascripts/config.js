'use strict';

window.GoogleAnalyticsObject = '__ga__';
window.__ga__ = {
    q: [['create', 'UA-64152368-2', 'auto']],
    l: Date.now()
};

require.config({
    shim: {
        'bootstrap': {deps: ['jquery']},
        'ga': {exports: '__ga__'}
    },
    paths: {
        'backbone': 'libs/backbone-1.1.2',
        'bootstrap': 'libs/bootstrap-3.3.1',
        'cal-heatmap': 'bower/cal-heatmap/cal-heatmap',
        'd3': 'bower/d3/d3',
        'domReady': 'libs/require-2.1.15/domReady',
        'ga': '//www.google-analytics.com/analytics',
        'jquery': 'libs/jquery-1.11.1',
        'marked': 'libs/marked-0.3.3',
        'templates': '../templates',
        'text': 'libs/require-2.1.15/text',
        'underscore': 'libs/underscore-1.7.0'
    }
});
