'use strict';

define(['squire'], function(Squire) {

  describe('ResumeCollection', function() {
    var injector;

    beforeEach(function() {
      injector = new Squire();
    });

    afterEach(function() {
      injector.remove();
    });

    describe('when instantiated with model literal', function() {
      var model, collection;

      beforeEach(function(done) {
        injector
          .store('models/resume/ResumeModel')
          .require([
            'collections/resume/ResumeCollection',
            'mocks'
          ], function(ResumeCollection, mocks) {
            model = sinon
              .stub(mocks.store, 'models/resume/ResumeModel')
              .returns( new Backbone.Model({ id: 5, title: 'Foo' }) );
            collection = new ResumeCollection();
            collection.model = model;
            collection.add({ id: 5, title: 'Foo' });
            done();
          });
      });

      afterEach(function() {
        model.restore();
      });

      it('should add a model', function() {
        expect(collection.length).toEqual(1);
      });

      it('should find a model by id', function() {
        expect(collection.get(5).get('id')).toEqual(5);
      });
    });

    describe('fetching models', function() {
      var server, collection;

      beforeEach(function(done) {
        injector
          .require([
            'collections/resume/ResumeCollection'
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

});
