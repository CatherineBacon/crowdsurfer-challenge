'use strict';

describe('Filter: fundTypeClass', function () {

  // load the filter's module
  beforeEach(module('crowdsurferApp'));

  // initialize a new instance of the filter before each test
  var fundTypeClass;
  beforeEach(inject(function ($filter) {
    fundTypeClass = $filter('fundTypeClass');
  }));

  it('should return correct class', function () {
    expect(fundTypeClass("E")).toBe('label-primary');
    expect(fundTypeClass("R")).toBe('label-warning');
    expect(fundTypeClass("anything else")).toBe('label-default');
  });

});
