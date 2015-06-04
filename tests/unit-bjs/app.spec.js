'use strict';

define(['squire'], function(Squire) {
  var injector = new Squire();

  injector.require(['app'], function(App) {

    describe('App entrypoint', function() {
      it('defined all the necessary properties', function() {
        expect(App.app).toBeDefined();
        expect(App.tube).toBeDefined();
        expect(App.initialize).toBeDefined();
      });

      it('can be properly initialized', function() {
        var isInstanceOf = (App.initialize() instanceof Backbone.Router);
        expect(isInstanceOf).toBeTruthy();
      });
    });

  });

});
