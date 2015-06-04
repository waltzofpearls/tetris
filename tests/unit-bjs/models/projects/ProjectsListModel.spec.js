'use strict';

define(['squire'], function(Squire) {
  var injector = new Squire();

  describe('ProjectsList model', function() {
    var model;

    beforeEach(function(done) {
      injector.require(['models/projects/ProjectsListModel'], function(ProjectsListModel) {
        model = new ProjectsListModel({
          title: 'Project Insight'
        });
        done();
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
