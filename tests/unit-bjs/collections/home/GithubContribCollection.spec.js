'use strict';

define(['squire'], function(Squire) {

  describe('GithubContribCollection', function() {
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
          .store('models/home/GithubContribModel')
          .require([
            'collections/home/GithubContribCollection',
            'mocks'
          ], function(GithubContribCollection, mocks) {
            model = sinon
              .stub(mocks.store, 'models/home/GithubContribModel')
              .returns( new Backbone.Model({ id: 5, title: 'Foo' }) );
            collection = new GithubContribCollection();
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
            'collections/home/GithubContribCollection'
          ], function(GithubContribCollection) {
            server = sinon.fakeServer.create();
            collection = new GithubContribCollection();
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
        expect(server.requests[0].url).toEqual('/api/contributions');
      });

    });

  });

});
