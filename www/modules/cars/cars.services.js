cars.factory('CarFactory', ['$http', 'edmundsAPI', function($http, edmundsAPI){
  return {
    getCars: function(){
      return $http.get(edmundsAPI.host + '/api/vehicle/v2/makes/?fmt=json&api_key=' + edmundsAPI.key);
    },
    getMaintenanceSchedule: function(yearModelID){
      return $http.get(edmundsAPI.host + '/v1/api/maintenance/actionrepository/findbymodelyearid?modelyearid='+ yearModelID +'&fmt=json&api_key=' + edmundsAPI.key);
    }
  }
}]);

cars.service('CarObjectService', [function(){
  this.make = '';
  this.model = '';
  this.year = '';
  this.yearModelID = '';

}]);