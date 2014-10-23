'use strict';

angular.module('directives')
.directive('colorRed', function(){
  return {
    restrict: 'EAC',
    link: function(scope, element, attrs){
      $(element).css('color', 'red');
    }
  };
});