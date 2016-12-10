'use strict';

describe('Filter: momentFromNow', function () {

  // load the filter's module
  beforeEach(module('crowdsurferApp'));

  // initialize a new instance of the filter before each test
  var momentFromNow;
  beforeEach(inject(function ($filter) {
    momentFromNow = $filter('momentFromNow');
  }));

  it('should return the input prefixed with "momentFromNow filter:"', function () {
    var text = 'angularjs';
    expect(momentFromNow(text)).toBe('momentFromNow filter: ' + text);
  });

});
