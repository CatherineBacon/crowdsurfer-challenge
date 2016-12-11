'use strict';

describe('Filter: momentFromNow', function () {

  // load the filter's module
  beforeEach(module('crowdsurferApp'));

  // initialize a new instance of the filter before each test
  var momentFromNow;
  beforeEach(inject(function ($filter) {
    momentFromNow = $filter('momentFromNow');
  }));

  it('should return friendly dates', function () {
    var now = new Date();
    expect(momentFromNow(now)).toBe('a few seconds ago');
    var lastYear = now;
    lastYear.setFullYear(now.getFullYear() - 1);
    expect(momentFromNow(lastYear)).toBe("a year ago");
  });

});
