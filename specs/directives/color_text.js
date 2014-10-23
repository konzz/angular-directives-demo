'use strict';
describe('Directive: red_text', function(){

  beforeEach(module('directives'));

  var compile;
  var scope;

  beforeEach(inject(function($compile, $rootScope){
    compile = $compile;
    scope = $rootScope;
  }));

  it('should turn the text to specfified color', function(){
    var element = $('<span color-text="blue">Hi!</span>');
    compile(element)(scope);
    scope.$digest();

    expect(element.css('color')).toBe('blue');

    element = $('<span color-text="red">Hi!</span>');
    compile(element)(scope);
    scope.$digest();

    expect(element.css('color')).toBe('red');
  });

});