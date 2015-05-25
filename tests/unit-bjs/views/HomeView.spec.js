'use strict';

define(['views/HomeView'], function(HomeView) {
  describe('HomeView', function() {
    var view;

    beforeEach(function() {
      view = new HomeView({
        app: {},
        tube: _.extend({}, Backbone.Events)
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
