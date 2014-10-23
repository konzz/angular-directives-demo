'use strict';

angular.module('directives')
.directive('colorText', function(){
  return {
    priority: 1,
    link: function(scope, element, attrs){
      $(element).css('color', attrs.colorText);
    }
  };
});