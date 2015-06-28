'use strict';

define(['squire'], function(Squire) {
  var injector = new Squire();

  describe('GithubContribView', function() {
    var view;

    beforeEach(function(done) {
      injector.require(['views/home/GithubContribView'], function(GithubContribView) {
        view = new GithubContribView({
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

      it('should have a class of [tetris-view-github-contrib]', function() {
        expect($(view.el)).toHaveClass('tetris-view-github-contrib');
      });
    });

  });

});
