"use strict";

define([
    'jquery',
    'underscore',
    'backbone',
    'marked',
    'utils/Partial',
    'collections/ResumeCollection',
    'text!templates/resumeTemplate.html'
], function($, _, Backbone, Marked, Partial, ResumeCollection, resumeTemplate) {
    var ResumeView = Backbone.View.extend({
        el: $('.tetris-main-container'),

        render: function() {
            var that = this;

            this.collection = new ResumeCollection();
            this.collection.fetch({
                success: function(collection, response) {
                    that.$el.html(_.template(resumeTemplate)({
                        _: _,
                        Marked: Marked,
                        resume: collection.models[0]
                    }));
                }
            });

            this.$el.html(_.template(Partial.template.loader)(Partial.preload));
        }
    });

    return ResumeView;
});
