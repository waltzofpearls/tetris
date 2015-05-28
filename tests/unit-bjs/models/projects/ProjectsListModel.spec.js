'use strict';

define(['models/projects/ProjectsListModel'], function(ProjectsListModel) {
  describe('ProjectsList model', function() {
    describe('when instantiated', function() {
      it('should exhibit attributes', function() {
        var projectsList = new ProjectsListModel({
          title: 'Project Insight'
        });
        expect(projectsList.get('title')).toEqual('Project Insight');
      });
    });
  });
});
