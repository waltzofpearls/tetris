define([
    'jquery',
    'underscore',
    'backbone',
    'views/about',
    'views/projects/list',
    'views/resume'
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

        router.on('showAbout', function() {
            console.log('showAbout');
            var aboutView = new AboutView();
            aboutView.render();
        });

        router.on('showProjectsList', function() {
            console.log('showProjectsList');
            var projectsListView = new ProjectsListView();
            projectsListView.render();
        });

        router.on('showResume', function() {
            console.log('showResume');
            var resumeView = new ResumeView();
            resumeView.render();
        });

        router.on('defaultAction', function(actions) {
            // We have no matching route, lets just log what the URL was
            console.log('No route:', actions);
            console.log('defaultAction');
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
                Backbone.history.navigate(href, true);
            }
        });
    };

    return {
        initialize: initialize
    };
});
