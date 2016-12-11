'use strict';

/**
 * @ngdoc service
 * @name crowdsurferApp.dataService
 * @description
 * # dataService
 * Service in the crowdsurferApp.
 */
angular.module('crowdsurferApp')
  .service('dataService', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.fetch = function(cb) {
      $http.get('/blockchain-projects.json')
        .then(function(response){
          cb(response.data);
        });
    };
  }]);
