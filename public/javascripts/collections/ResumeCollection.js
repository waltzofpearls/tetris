"use strict";

define([
    'underscore',
    'backbone',
    'models/ResumeModel'
], function(_, Backbone, ResumeModel) {
    var ResumeCollection = Backbone.Collection.extend({
        model: ResumeModel,
        url: '/javascripts/data/resume.json'
    });

    return ResumeCollection;
});
