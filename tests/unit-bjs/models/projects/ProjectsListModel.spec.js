'use strict';

define(['models/projects/ProjectsListModel'], function(ProjectsListModel) {
  describe('ProjectsList model', function() {
    var model;

    beforeEach(function() {
      model = new ProjectsListModel({
        title: 'Project Insight'
      });
    });

    describe('when instantiated', function() {
      it('should exhibit attributes', function() {
        expect(model.get('title')).toEqual('Project Insight');
      });
    });

    describe('url', function() {
      it("should set the URL to the collection URL", function() {
        var collection = {
          url: '/projects'
        };
        model.collection = collection;
        expect(model.url()).toEqual(collection.url);
      });
    });
  });
});
