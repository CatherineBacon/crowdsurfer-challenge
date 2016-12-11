'use strict';

describe('Directive: projectSummary', function () {

  // load the directive's module
  beforeEach(module('crowdsurferApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should render correctly', inject(function ($compile) {
    scope.project = {
      title: 'test title',
      funding_type: 'E'
    };
    element = '<project-summary project="project"></project-summary>';
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('panel-title > a').text()).toContain('test title');
    expect(element.find('panel-title > .label').text()).toContain('Equity');
  }));
});
