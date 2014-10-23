'use strict';

angular.module('directives')
.directive('warning', function(){
  return {
    restrict: 'E',
    transclude: true,
    template: '<div color-text="blue" class="alert alert-danger" ng-transclude></div>'
  };
});