'use strict';

define(['squire'], function(Squire) {
  var injector = new Squire();

  describe('Resume model', function() {
    var model;

    beforeEach(function(done) {
      injector.require(['models/resume/ResumeModel'], function(ResumeModel) {
        model = new ResumeModel({
          title: 'Rollie Ma'
        });
        done();
      });
    });

    describe('when instantiated', function() {
      it('should exhibit attributes', function() {
        expect(model.get('title')).toEqual('Rollie Ma');
      });
    });

    describe('url', function() {
      it("should set the URL to the collection URL", function() {
        var collection = {
          url: '/resume'
        };
        model.collection = collection;
        expect(model.url()).toEqual(collection.url);
      });
    });

  });

});
