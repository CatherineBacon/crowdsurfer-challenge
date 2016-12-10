'use strict';

/**
 * @ngdoc filter
 * @name crowdsurferApp.filter:momentFromNow
 * @function
 * @description
 * # momentFromNow
 * Filter in the crowdsurferApp.
 */
angular.module('crowdsurferApp')
  .filter('momentFromNow', function () {
    return function (input) {
      return moment(input).fromNow();
    };
  });
