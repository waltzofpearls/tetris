'use strict';

define(['models/ResumeModel'], function(ResumeModel) {
  describe('Resume model', function() {
    var model;

    beforeEach(function() {
      model = new ResumeModel({
        title: 'Rollie Ma'
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
