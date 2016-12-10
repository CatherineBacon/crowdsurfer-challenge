'use strict';

/**
 * @ngdoc filter
 * @name crowdsurferApp.filter:fundTypeName
 * @function
 * @description
 * # fundTypeName
 * Filter in the crowdsurferApp.
 */
angular.module('crowdsurferApp')
  .filter('fundTypeName', function () {
    return function (input) {
      if (input == 'E') return 'Equity';
      if (input == 'R') return 'Reward';
      return;
    };
  });
