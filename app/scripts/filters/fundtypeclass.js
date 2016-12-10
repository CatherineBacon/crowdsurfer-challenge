'use strict';

/**
 * @ngdoc filter
 * @name crowdsurferApp.filter:fundTypeClass
 * @function
 * @description
 * # fundTypeClass
 * Filter in the crowdsurferApp.
 */
angular.module('crowdsurferApp')
  .filter('fundTypeClass', function () {
    return function (input) {
      if (input == "E") return "label-primary";
      if (input == "R") return "label-warning";
      return "label-default";
    };
  });
