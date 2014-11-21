'use strict';

angular.module('directives')
.directive('doubleBind', function(){
  return {
    scope: {
      bindedValue: '=doubleBind'
    },
    template: '<input type="text" ng-model="bindedValue" name="name" placeholder="Name"> {{bindedValue}}'
  };
});