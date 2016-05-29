// angular.module('welcome', []);

welcome.controller('WelcomeCtrl', ['$scope', function($scope){
  $scope.toCarSelection = function(){
    window.alert('State to car selection');
  };
}]);