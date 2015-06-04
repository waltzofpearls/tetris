'use strict';

define(['squire'], function(Squire) {
  var injector = new Squire();

  describe('HomeView', function() {
    var view;

    beforeEach(function(done) {
      injector.require(['views/HomeView'], function(HomeView) {
        view = new HomeView({
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

      it('should have a class of [tetris-page-home]', function() {
        expect($(view.el)).toHaveClass('tetris-page-home');
      });
    });

  });

});
