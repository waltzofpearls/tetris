'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'cal-heatmap',
    'utils/Partial',
    'collections/home/GithubContribCollection',
    'text!templates/home/githubContribTemplate.html'
], function(
    $, _, Backbone, CalHeatMap, Partial, GithubContribCollection, githubContribTemplate
) {
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
                    var data = collection.models[0].toJSON();
                    var i = 0;
                    var timestamp;

                    that.$el.html(_.template(githubContribTemplate)({
                        _: _
                    }));

                    for (timestamp in data) {
                        if (i > 0) {
                            break;
                        }
                        i++;
                    }

                    cal.init({
                      itemSelector: that.$('.tetris-heatmap')[0],
                      domain: 'month',
                      data: data,
                      start: timestamp ? new Date(timestamp*1000) : new Date(),
                      cellSize: 15,
                      range: 12,
                      legend: [2, 4, 6, 8],
                      itemName: ['contribution', 'contributions'],
                      tooltip: true,
                      considerMissingDataAsZero: true
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
