require.config({
    paths: {
        jquery: 'libs/jquery-1.11.1.min',
        underscore: 'libs/underscore-1.7.0.min',
        backbone: 'libs/backbone-1.1.2.min',
        bootstrap: 'libs/bootstrap-3.3.1.min'
    }
});

require([
    'app',
], function(App) {
    App.initialize();
});
