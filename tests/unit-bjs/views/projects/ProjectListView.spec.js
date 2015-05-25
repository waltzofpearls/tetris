'use strict';

define(['views/projects/ProjectsListView'], function(ProjectsListView) {
  describe('ProjectsListView', function() {
    var view;

    beforeEach(function() {
      view = new ProjectsListView({
        app: {},
        tube: _.extend({}, Backbone.Events)
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
