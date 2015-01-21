
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/projects/ProjectsListCollection',
    'text!templates/projects/projectsListTemplate.html'
], function($, _, Backbone, ProjectsListCollection, projectsListTemplate) {
    var ProjectsListView = Backbone.View.extend({
        el: $('.tetris-main-container'),

        render: function() {
            this.collection = new ProjectsListCollection();
            this.collection.fetch();

            var compiledTemplate = _.template(projectsListTemplate, {
                projects: this.collection.model
            });

            this.$el.html(compiledTemplate);
        }
    });

    return ProjectsListView;
});
