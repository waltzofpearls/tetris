'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'cal-heatmap',
    'utils/Partial',
    'collections/home/GithubContribCollection',
    'text!templates/home/githubContribTemplate.html'
], function($, _, Backbone, CalHeatmap, Partial, GithubContribCollection, githubContribTemplate) {
    var ResumeView = Backbone.View.extend({
        tagName: 'div',
        className: 'tetris-view-github-contrib',

        xhr: null,

        initialize: function(options) {
            this.app = options.app;
            this.tube = options.tube;
        },

        render: function() {
            var that = this;

            this.collection = new GithubContribCollection();
            this.xhr = this.collection.fetch({
                success: function(collection, response) {
                    var cal = new CalHeatMap();
                    var data = collection.toJSON();

                    that.$el.html(_.template(githubContribTemplate)({
                        _: _,
                    }));

                    cal.init({
                        itemSelector: '.tetris-heatmap',
                        domain: 'month',
                        // subDomain: 'day',
                        data: collection.toJSON(),
                        // start: new Date(2015, 0),
                        dataType: 'json',
                        cellSize: 15,
                        range: 12,
                        legend: [2, 4, 6, 8]
                    });

                    that.xhr = null;
                }
            });

            this.$el.html(_.template(Partial.template.loader)(Partial.preload));

            return this;
        },

        close: function() {
            if (this.xhr !== null) {
                this.xhr.abort();
            }
            _.each(this.subViews, function(view) {
                view.remove();
            });
            this.remove();
        }
    });

    return ResumeView;
});
