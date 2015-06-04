'use strict';

define(['squire'], function(Squire) {
  var injector = new Squire();

  injector
    .mock('foo', {
      message: 'Hello, World!'
    })
    .require(['collections/ResumeCollection'], function(ResumeCollection) {

      // describe('qs.params', function() {
      //   it('should contain an objet of all query string params', function() {

      //   });
      // });

    });

});
