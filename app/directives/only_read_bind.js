'use strict';

angular.module('directives')
.directive('onlyRead', function(){
  return {
    scope: {
      bindedValue: '@onlyRead'
    },
    template: '<input type="text" ng-model="bindedValue" name="name" placeholder="Name"> {{bindedValue}}'
  };
});