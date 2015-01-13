define([
    'jquery',
    'underscore',
    'backbone',
    'views/HomeView',
    'views/AboutView',
    'views/projects/ProjectsListView',
    'views/ResumeView'
], function($, _, Backbone, HomeView, AboutView, ProjectsListView, ResumeView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'about': 'showAbout',
            'projects': 'showProjectsList',
            'resume': 'showResume',
            // Default
            '*actions': 'defaultAction'
        }
    });

    var initialize = function() {
        var router = new AppRouter();

        router.on('route:showAbout', function() {
            var aboutView = new AboutView();
            aboutView.render();
        });

        router.on('route:showProjectsList', function() {
            var projectsListView = new ProjectsListView();
            projectsListView.render();
        });

        router.on('route:showResume', function() {
            var resumeView = new ResumeView();
            resumeView.render();
        });

        router.on('route:defaultAction', function(actions) {
            // no matching route, fall back to HomeView
            var homeView = new HomeView();
            homeView.render();
        });

        Backbone.history.start({
            pushState: true
        });

        // on every click, check if it's an href that can be handled by the router
        $(document).on('click', 'a', function(evt) {
            var href = $(this).attr('href');
            var protocol = this.protocol + '//';

            if (href.slice(protocol.length) !== protocol &&
                protocol !== 'javascript://' &&
                href.substring(0, 1) !== '#'
            ) {
                evt.preventDefault();
                Backbone.history.navigate(href, {trigger: true});
            }
        });
    };

    return {
        initialize: initialize
    };
});
