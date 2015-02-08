
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/projects/ProjectsListCollection',
    'text!templates/projects/projectsListTemplate.html'
], function($, _, Backbone, ProjectsListCollection, projectsListTemplate) {
    var ProjectsListView = Backbone.View.extend({
        el: $('.tetris-main-container'),

        initialize: function() {
            this.spinner = $('<img>').attr('src', '/images/spinner1.gif');
        },

        render: function() {
            var that = this;

            this.collection = new ProjectsListCollection();
            this.collection.fetch({
                success: function(collection, response) {
                    that.$el.html(_.template(projectsListTemplate)({
                        _: _,
                        projects: collection.models
                    }));
                }
            });

            this.$el.html(this.spinner);
            this.$el.html(this.$el.html() + ' Loading...');
        }
    });

    return ProjectsListView;
});
