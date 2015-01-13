
define([
    'jquery',
    'underscore',
    'backbone',
    // Using the Require.js text! plugin, we are loaded raw text
    // which will be used as our views primary template
    'text!templates/aboutTemplate.html'
], function($, _, Backbone, aboutTemplate){
    var AboutView = Backbone.View.extend({
        el: $('.tetris-main-container'),

        render: function() {
            // Using Underscore we can compile our template with data
            var data = {};
            var compiledTemplate = _.template(aboutTemplate, data);

            // Append our compiled template to this Views "el"
            this.$el.html(compiledTemplate);
        }
    });

    // Our module now returns our view
    return AboutView;
});
