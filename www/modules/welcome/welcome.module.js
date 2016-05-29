var welcome = angular.module('welcome', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  // setup an abstract state for the tabs directive
  .state('welcome', {
    url: '/welcome',
    controller: 'WelcomeCtrl',
    templateUrl: 'modules/welcome/templates/welcome.html'
  });
});