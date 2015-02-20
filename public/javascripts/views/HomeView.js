"use strict";

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/homeTemplate.html'
], function($, _, Backbone, homeTemplate) {
    var HomeView = Backbone.View.extend({
        el: $('.tetris-main-container'),

        render: function() {
            this.$el.html(_.template(homeTemplate)({
                avatarRandNum: this.getRandomInt(1, 7)
            }));
        },

        // min is included
        // max is excluded
        // so (1, 6) will only output a number between 1 and 5
        getRandomInt: function(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
    });

    // Our module now returns our view
    return HomeView;
});
