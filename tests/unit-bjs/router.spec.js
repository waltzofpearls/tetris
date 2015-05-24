'use strict';

define([
  'router', 'sinon', 'jquery', 'underscore', 'jasmine-sinon'
], function(Router, Sinon, $, _) {
  describe('Router routes', function() {
    beforeEach(function() {
      this.router = Router.initialize();
      this.routeSpy = Sinon.spy();
      // try {
      //   Backbone.history.start({silent: true, pushState: true});
      // } catch(e) { }
      // this.router.navigate('elsewhere');
    });

    it("fires the index route with a blank hash", function() {
      this.router.bind('route:defaultAction', this.routeSpy);
      this.router.navigate('', true);
      expect(this.routeSpy).toHaveBeenCalledOnce();
      expect(this.routeSpy).toHaveBeenCalledWith();
    });
  });
});
