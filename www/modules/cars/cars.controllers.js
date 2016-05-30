cars
.controller('CarsCtrl', ['$scope', '$state', 'CarObjectService', 'CarFactory', function($scope, $state, CarObjectService, CarFactory){
  $scope.makeList = [];
  $scope.selectedVehicle = {};
  $scope.vehicle = CarObjectService;

  $scope.vehicleMakes = function(){
    CarFactory.getCars()
      .then(function(promise){
        $scope.makeList = promise.data.makes;
      })
      .catch(function(error){
        window.alert(error);
      });
  };

  $scope.selectMake = function(make){
    $scope.modelList = make.models;
    $scope.vehicle.make = make.name;
  };

  $scope.selectModel = function(model){
    $scope.yearList = model.years;
    $scope.vehicle.model = model.name;
  };

  $scope.selectYear = function(year){
    $scope.vehicle.year = year.year;
  }

  $scope.selectVehicle = function(){
    $scope.vehicle.yearModelID = $scope.selectedVehicle.year.id;
    $state.go('maintenanceSchedule', {
      make: $scope.vehicle.make, 
      model: $scope.vehicle.model, 
      year: $scope.vehicle.year,
      id: $scope.vehicle.yearModelID
    });
  };

  $scope.vehicleMakes();
}])

.controller('MaintenanceCtrl', ['$scope', '$stateParams', 'CarObjectService', 'CarFactory', function($scope, $stateParams, CarObjectService, CarFactory) {
  console.log(CarObjectService);
  console.log($stateParams);
  $scope.schedules = [];
  $scope.vehicle = CarObjectService;
  if(!CarObjectService.make || !CarObjectService.model || !CarObjectService.year || !CarObjectService.yearModelID){
    $scope.vehicle = $stateParams;
  }
  
  $scope.getSchedules = function(){
    CarFactory.getMaintenanceSchedule($stateParams.id)
      .then(function(promise){
        console.log(promise);
        $scope.schedules = promise.data.actionHolder;
      })
      .catch(function(error){
        window.alert(error);
      });
  };

  $scope.getSchedules();

}]);