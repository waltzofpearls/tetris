require.config({
    shim: {
        'bootstrap': {'deps': ['jquery']}
    },
    paths: {
        jquery: 'libs/jquery-1.11.1',
        underscore: 'libs/underscore-1.7.0',
        backbone: 'libs/backbone-1.1.2',
        bootstrap: 'libs/bootstrap-3.3.1'
    }
});

require([
    'app',
], function(App) {
    App.initialize();
});
