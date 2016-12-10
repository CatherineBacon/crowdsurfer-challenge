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
      },
      controller: function(){
        this.currencySymbol = function(code){
          if (!code) return;
          if (code == 'GBP') return '£';
          if (code == 'USD') return '$';
          return code + " ";
        };
      },
      controllerAs: 'summary'
    };
  });
