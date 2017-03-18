angular.
  module('jobquestApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<welcome></welcome>'
        }).
        when('/dashboard', {
          template: '<dashboard></dashboard>'
        }).
        otherwise('/');
    }
  ]);