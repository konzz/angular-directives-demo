'use strict';

angular.module('directives')
.directive('customClick', function(){
  return {
    scope:{
      action: '&customClick'
    },
    link: function(scope, element, attrs){
      $(element).on('click', function(){
        
        if (confirm('are you sure you want an alert?')) {
          scope.action('hola');
        }
        
      });
    }
  };
});