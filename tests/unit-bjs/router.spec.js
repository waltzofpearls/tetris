'use strict';

define(['router'], function(Router) {
  describe('Router routes', function() {
    var router, routeSpy;

    beforeEach(function() {
      router = Router.initialize();
      routeSpy = sinon.spy();
      try {
        Backbone.history.start({silent: true, pushState: true});
      } catch(e) { }
      router.navigate('elsewhere');
    });

    afterEach(function() {
      Backbone.history.stop();
    });

    it('fires the index route with a blank hash', function() {
      router.on('route:defaultAction', routeSpy);
      router.navigate('', true);
      expect(routeSpy).toHaveBeenCalledOnce();
      expect(routeSpy).toHaveBeenCalledWith();
    });

    it('fires the projects route', function() {
      router.bind('route:showProjectsList', routeSpy);
      router.navigate('projects', true);
      expect(routeSpy).toHaveBeenCalledOnce();
      expect(routeSpy).toHaveBeenCalledWith();
    });

    it('fires the resume route', function() {
      router.bind('route:showResume', routeSpy);
      router.navigate('resume', true);
      expect(routeSpy).toHaveBeenCalledOnce();
      expect(routeSpy).toHaveBeenCalledWith();
    });
  });
});
