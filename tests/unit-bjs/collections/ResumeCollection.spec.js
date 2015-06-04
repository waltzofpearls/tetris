'use strict';

define(['squire'], function(Squire) {
  var injector = new Squire();

  describe('ResumeCollection', function() {
    var server, collection;

    beforeEach(function(done) {
      injector
        .mock('models/ResumeModel', {
          message: 'Hello, World!'
        })
        .require([
          'collections/ResumeCollection'
        ], function(ResumeCollection) {
          server = sinon.fakeServer.create();
          collection = new ResumeCollection();
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
      expect(server.requests[0].url).toEqual('/data/resume.json');
    });

  });

});
