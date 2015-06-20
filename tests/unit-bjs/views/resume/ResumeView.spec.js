'use strict';

define(['squire'], function(Squire) {
  var injector = new Squire();

  describe('ResumeView', function() {
    var view;

    beforeEach(function(done) {
      injector.require(['views/resume/ResumeView'], function(ResumeView) {
        view = new ResumeView({
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

      it('should have a class of [tetris-page-resume]', function() {
        expect($(view.el)).toHaveClass('tetris-page-resume');
      });
    });

  });

});
