'use strict';

define(['views/ResumeView'], function(ResumeView) {
  describe('ResumeView', function() {
    var view;

    beforeEach(function() {
      view = new ResumeView({
        app: {},
        tube: _.extend({}, Backbone.Events)
      });
    });

    describe('Instantiation', function() {
      it('should create a div element', function() {
        expect(view.el.nodeName).toEqual('DIV');
      });

      it('should have a class of [tetris-page-resume]', function() {
        expect($(view.el)).toHaveClass('tetris-page-resume');
      });
    });
  });
});
