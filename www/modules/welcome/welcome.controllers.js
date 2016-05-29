// angular.module('welcome', []);

welcome.controller('WelcomeCtrl', ['$scope', '$state', function($scope, $state){
  $scope.toCarSelection = function(){
    $state.go('carSelection');
  };
}]);