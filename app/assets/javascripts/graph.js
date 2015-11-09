var d3DemoApp = angular.module('d3DemoApp', []);

// controller business logic
d3DemoApp.controller('AppCtrl', function AppCtrl ($scope, $http) {

  $scope.getData = function() {
    $http({
      method: 'GET',
      url: 'https://localhost:3000/moods'
    })
    .success(function (data){
      console.log(data);
    })
  }
});
