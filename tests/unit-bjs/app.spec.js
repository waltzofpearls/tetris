'use strict';

define(['squire'], function(Squire) {
  var injector;

  describe('App entrypoint', function() {

    beforeEach(function() {
      injector = new Squire();
    });

    afterEach(function() {
      injector.remove();
    });

    it('defined all the necessary properties', function(done) {
      injector.require(['app'], function(App) {
        expect(App.app).toBeDefined();
        expect(App.tube).toBeDefined();
        expect(App.initialize).toBeDefined();
        done();
      });
    });

    it('can be properly initialized', function(done) {
      injector.require(['app'], function(App) {
        var isInstanceOf = (App.initialize() instanceof Backbone.Router);
        expect(isInstanceOf).toBeTruthy();
        done();
      });
    });

  });

});
