var app = angular.module("app", []);
app.controller("HelloWorldCtrl", function($scope) {
  $scope.message = "Hello World!";	
});
app.controller("SecondCtrl", function($scope) {
  $scope.second_msg = "Using a second controller for this header";	
});

