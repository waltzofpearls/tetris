'use strict';

define(['squire'], function(Squire) {
  var injector = new Squire();

  describe('ResumeCollection', function() {
    var server, collection;

    beforeEach(function(done) {
      injector
        .mock('models/projects/ProjectsListModel', {
          message: 'Hello, World!'
        })
        .require([
          'collections/projects/ProjectsListCollection'
        ], function(ProjectsListCollection) {
          server = sinon.fakeServer.create();
          collection = new ProjectsListCollection();
          done();
        });
    });

    afterEach(function() {
      server.restore();
    });

    it('should make the correct request', function() {
      collection.fetch();
      expect(server.requests.length).toEqual(1);
      expect(server.requests[0].method).toEqual('GET');
      expect(server.requests[0].url).toEqual('/api/projects');
    });

  });

});
