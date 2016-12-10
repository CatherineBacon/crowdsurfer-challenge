'use strict';

describe('Directive: projectSummary', function () {

  // load the directive's module
  beforeEach(module('crowdsurferApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<project-summary></project-summary>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the projectSummary directive');
  }));
});
