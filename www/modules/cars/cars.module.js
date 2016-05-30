var cars = angular.module('cars', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  // setup an abstract state for the tabs directive
  .state('carSelect', {
    url: '/car-select',
    controller: 'CarsCtrl',
    templateUrl: 'modules/cars/templates/car-select.html'
  })
  .state('maintenanceSchedule', {
    url: '/maintenance-schedule?make&model&year&id',
    controller: 'MaintenanceCtrl',
    templateUrl: 'modules/cars/templates/maintenance-schedule.html'
  });
});