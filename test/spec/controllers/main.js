'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('crowdsurferApp'));

  var MainCtrl,
      scope;

  var mockDataService = {
    fetch: function(cb) {
      cb([1]);
    }
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      // place here mocked dependencies
      dataService: mockDataService
    });
  }));

  it('should have properties in scope', function () {
    expect(MainCtrl.sortByAmount).toBeDefined();
    expect(MainCtrl.fundingFilter).toBeDefined();
    expect(MainCtrl.searchTerm).toBeDefined();
    expect(MainCtrl.data).toBeDefined();
  });

  it('should sort correctly', function () {
    MainCtrl.sortByAmount = true;
    expect(MainCtrl.sortBy()).toBe("-raised");
    MainCtrl.sortByAmount = false;
    expect(MainCtrl.sortBy()).toBe("-end_time");
  });

  it('should filter correctly', function () {
    MainCtrl.fundingFilter = 'all';
    expect(MainCtrl.filterBy()).toBe(true);
    MainCtrl.fundingFilter = 'reward';
    expect(MainCtrl.filterBy({})).toBe(false);
    expect(MainCtrl.filterBy({funding_type: 'R'})).toBe(true);
    MainCtrl.fundingFilter = 'equity';
    expect(MainCtrl.filterBy({})).toBe(false);
    expect(MainCtrl.filterBy({funding_type: 'E'})).toBe(true);    
  });

  it('should call the data service and store the result in this.data', function () {
    expect(MainCtrl.data).toEqual([1]);
  });
});
