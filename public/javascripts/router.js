define([
    'jquery',
    'underscore',
    'backbone',
    'views/about.js',
    'views/projects/list.js',
    'views/resume.js'
], function($, _, Backbone, AboutView, ProjectsListView, ResumeView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            '/about': 'showAbout',
            '/projects': 'showProjectsList',
            '/resume': 'showResume',
            // Default
            '*actions': 'defaultAction'
        }
    });

    var initialize = function() {
        var router = new AppRouter();

        router.on('showAbout', function(){
            var aboutView = new AboutView();
            aboutView.render();
        });

        router.on('showProjectsList', function(){
            var projectsListView = new ProjectsListView();
            projectsListView.render();
        });

        router.on('showResume', function(){
            var resumeView = new ResumeView();
            resumeView.render();
        });

        router.on('defaultAction', function(actions) {
            // We have no matching route, lets just log what the URL was
            console.log('No route:', actions);
        });

        Backbone.history.start({
            pushState: true,
            hashChange: false
        });
    };

    return {
        initialize: initialize
    };
});
