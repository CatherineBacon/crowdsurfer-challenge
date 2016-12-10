'use strict';

/**
 * @ngdoc directive
 * @name crowdsurferApp.directive:projectSummary
 * @description
 * # projectSummary
 */
angular.module('crowdsurferApp')
  .directive('projectSummary', function () {
    return {
      templateUrl: 'partials/projectsummary.html',
      restrict: 'E',
      scope: {
        project: "="
      }
    };
  });
