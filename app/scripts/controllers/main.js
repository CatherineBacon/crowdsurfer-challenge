'use strict';

/**
 * @ngdoc function
 * @name crowdsurferApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crowdsurferApp
 */
angular.module('crowdsurferApp')
  .controller('MainCtrl', ['dataService', function (dataService) {
    var main = this;
    this.sortByAmount = true;
    this.fundingFilter = 'all';
    this.searchTerm = '';
    this.data = [];

    dataService.fetch(function(data) {
      main.data = data;
    });
    
    this.sortBy = function(){
      if (main.sortByAmount) return '-raised';
      return '-end_time';
    };

    this.filterBy = function(project){
      if (main.searchTerm != '' && !project.title.toLowerCase().includes(main.searchTerm.toLowerCase())) return false;
      if (main.fundingFilter == 'all') return true;
      if (main.fundingFilter == 'reward' && project.funding_type == 'R') return true;
      if (main.fundingFilter == 'equity' && project.funding_type == 'E') return true;
      return false;
    };
  }]);
