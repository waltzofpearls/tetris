'use strict';

define(['squire'], function(Squire) {
  var injector = new Squire();

  describe('ProjectsListView', function() {
    var view;

    beforeEach(function(done) {
      injector.require(['views/projects/ProjectsListView'], function(ProjectsListView) {
        view = new ProjectsListView({
          app: {},
          tube: _.extend({}, Backbone.Events)
        });
        done();
      });
    });

    describe('Instantiation', function() {
      it('should create a div element', function() {
        expect(view.el.nodeName).toEqual('DIV');
      });

      it('should have a class of [tetris-page-projects]', function() {
        expect($(view.el)).toHaveClass('tetris-page-projects');
      });
    });

  });

});
