(function () {
'use strict';

angular.module('MyFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Federico";
  $scope.SayHello = function(){
    return "Hello Coursera";
  }
})


})();
