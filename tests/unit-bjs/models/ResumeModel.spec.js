'use strict';

define(['models/ResumeModel'], function(ResumeModel) {
  describe('Resume model', function() {
    describe('when instantiated', function() {
      it('should exhibit attributes', function() {
        var resume = new ResumeModel({
          title: 'Rollie Ma'
        });
        expect(resume.get('title')).toEqual('Rollie Ma');
      });
    });
  });
});
