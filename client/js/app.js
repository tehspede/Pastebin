var pastebinApp = angular.module('pastebinApp', [
  'ngRoute',
  'ngSanitize',
  'hljs',
  'pastebinControllers'
]);

pastebinApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      }).
      when('/:pasteId', {
        templateUrl: 'partials/paste.html',
        controller: 'MainCtrl'
      });
  }
]);
