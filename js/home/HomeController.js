angular.module('myRoutingApp')
  .controller("HomeController", function($scope, DataFactory) {

    $scope.section = 'HOME'
    $scope.students = DataFactory.getAllStudents()

  })