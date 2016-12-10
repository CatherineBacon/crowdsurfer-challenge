'use strict';

describe('Filter: fundTypeName', function () {

  // load the filter's module
  beforeEach(module('crowdsurferApp'));

  // initialize a new instance of the filter before each test
  var fundTypeName;
  beforeEach(inject(function ($filter) {
    fundTypeName = $filter('fundTypeName');
  }));

  it('should return Equity when given "E"', function () {
    var text = 'E';
    expect(fundTypeName(text)).toBe('Equity');
  });

  it('should return Reward when given "R"', function () {
    var text = 'R';
    expect(fundTypeName(text)).toBe('Reward');
  });

});
