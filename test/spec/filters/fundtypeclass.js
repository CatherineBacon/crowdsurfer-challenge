'use strict';

describe('Filter: fundTypeClass', function () {

  // load the filter's module
  beforeEach(module('crowdsurferApp'));

  // initialize a new instance of the filter before each test
  var fundTypeClass;
  beforeEach(inject(function ($filter) {
    fundTypeClass = $filter('fundTypeClass');
  }));

  it('should return the input prefixed with "fundTypeClass filter:"', function () {
    var text = 'angularjs';
    expect(fundTypeClass(text)).toBe('fundTypeClass filter: ' + text);
  });

});
