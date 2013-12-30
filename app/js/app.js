'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/verb/es/:name', { templateUrl: 'partials/es.html', controller: 'SpanishController' });

  $routeProvider.otherwise({redirectTo: '/'});
}]);
