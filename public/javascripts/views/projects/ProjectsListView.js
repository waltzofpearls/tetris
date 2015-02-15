
define([
    'jquery',
    'underscore',
    'backbone',
    'utils/Partial',
    'collections/projects/ProjectsListCollection',
    'text!templates/projects/projectsListTemplate.html'
], function($, _, Backbone, Partial, ProjectsListCollection, projectsListTemplate) {
    var ProjectsListView = Backbone.View.extend({
        el: $('.tetris-main-container'),

        initialize: function() {
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

            this.$el.html(_.template(Partial.template.loader)(Partial.preload));
        }
    });

    return ProjectsListView;
});
