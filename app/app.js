angular.module('myapp', ['directives'])
.controller('demo', function($scope){
  
  $scope.name = 'Alberto';
  $scope.surname = 'Casado';

  $scope.alert = function(msg){
    alert(msg);
  };
  
});
