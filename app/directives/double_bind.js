'use strict';

angular.module('directives')
.directive('doubleBind', function(){
  return {
    scope: {
      bindedValue: '=attr'
    },
    template: '<input type="text" ng-model="bindedValue" name="name" placeholder="Name"> {{bindedValue}}'
  };
});