"use strict";

require.config({
    shim: {
        'bootstrap': {'deps': ['jquery']}
    },
    paths: {
        backbone: 'libs/backbone-1.1.2',
        bootstrap: 'libs/bootstrap-3.3.1',
        jquery: 'libs/jquery-1.11.1',
        marked: 'libs/marked-0.3.3',
        templates: '../templates',
        underscore: 'libs/underscore-1.7.0'
    }
});

require([
    'app',
], function(App) {
    App.initialize();
});
