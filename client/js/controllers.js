var pastebinControllers = angular.module('pastebinControllers', []);

pastebinControllers.controller('MainCtrl',
  function ($scope, $routeParams, $http, $location) {
    if ($routeParams.pasteId) {
      $http.get('/paste/' + $routeParams.pasteId)
      .success(function (data) {
      if (!data.paste) {
         $location.path('/');
       }
        $scope.paste = data.paste;
      });
    }

    $scope.send = function () {
      var data = $('form').serializeArray();
      console.log(data);
      $http.post("/paste", data, {headers: 'application/json'})
      .success(function(data, status) {
        $location.path('/' + data['_id']);
      });
    };
  }
);
