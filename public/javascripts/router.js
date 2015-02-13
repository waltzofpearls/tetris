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
            'projects': 'showProjectsList',
            'resume': 'showResume',
            // Default
            '*actions': 'defaultAction'
        },

        titles: {
            'showProjectsList': 'Projects',
            'showResume': 'Resume',
            'default': 'Tetris'
        },

        initialize: function(options) {
            var that = this;

            this.on('route', function(router, route, params) {
                if (that.titles) {
                    document.title = (
                        that.titles[router] ? that.titles[router] + ' - ' : ''
                    ) + (
                        that.titles['default'] ? that.titles['default'] : ''
                    );
                }
            });
        }
    });

    var initialize = function() {
        var router = new AppRouter();

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

        attachGlobalClickListener();
        attachGlobalScrollListener();
    };

    var attachGlobalClickListener = function() {
        // on every click, check if it's an href that can be handled by the router
        $(document).on('click', 'a', function(evt) {
            var a = $(this);
            var rel = a.attr('rel');
            var href = a.attr('href');
            var protocol = this.protocol + '//';

            if (rel == 'external') {
                a.attr('target', '_blank');
                return true;
            }

            if (href.slice(protocol.length) !== protocol &&
                protocol !== 'javascript://' &&
                href.substring(0, 1) !== '#'
            ) {
                evt.preventDefault();
                Backbone.history.navigate(href, {trigger: true});
            }
        });
    };

    var attachGlobalScrollListener = function() {
        $(window).scroll(function() {
            var smallLogoHeight = $('.small-logo').height();
            var bigLogoHeight = $('.big-logo').height();
            var navbarHeight = $('.navbar').height();

            var smallLogoEndPos = 0;
            var smallSpeed = (smallLogoHeight / bigLogoHeight);

            var ySmall = ($(window).scrollTop() * smallSpeed);

            var smallPadding = navbarHeight - ySmall;
            if (smallPadding > navbarHeight) {
                smallPadding = navbarHeight;
            }
            if (smallPadding < smallLogoEndPos) {
                smallPadding = smallLogoEndPos;
            }
            if (smallPadding < 0) {
                smallPadding = 0;
            }

            $('.small-logo-container').css({
                'width': (smallLogoHeight > smallPadding) ? '50px' : 0,
                'padding-top': smallPadding
            });

            var navOpacity = ySmall / smallLogoHeight;
            if (navOpacity > 1) {
                navOpacity = 1;
            }
            if (navOpacity < 0) {
                navOpacity = 0;
            }

            var shadowOpacity = navOpacity * 0.4;
            if (ySmall > 1) {
                $('.navbar').css({'box-shadow': '0 2px 3px rgba(0,0,0,' + shadowOpacity + ')'});
            } else {
                $('.navbar').css({'box-shadow': 'none'});
            }
        });
    };

    return {
        initialize: initialize
    };
});
