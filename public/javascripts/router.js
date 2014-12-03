define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            // '/projects': 'showProjects',
            // '/users': 'showUsers',
            // Default
            '*actions': 'defaultAction'
        }
    });

    var initialize = function() {
        var app_router = new AppRouter();

        app_router.on('defaultAction', function(actions) {
            // We have no matching route, lets just log what the URL was
            console.log('No route:', actions);
        });

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
