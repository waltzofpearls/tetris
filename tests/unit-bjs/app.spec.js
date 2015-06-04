'use strict';

define(['squire'], function(Squire) {
  var injector = new Squire();

  describe('App entrypoint', function() {
    var app;

    beforeEach(function(done) {
      injector.require(['app'], function(App) {
        app = App;
        done();
      });
    });

    it('defined all the necessary properties', function() {
      expect(app.app).toBeDefined();
      expect(app.tube).toBeDefined();
      expect(app.initialize).toBeDefined();
    });

    // it('can be properly initialized', function() {
    //   var isInstanceOf = (app.initialize() instanceof Backbone.Router);
    //   expect(isInstanceOf).toBeTruthy();
    // });

  });

});
