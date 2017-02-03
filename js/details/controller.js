angular.module('myRoutingApp')
  .controller("DetailsController", function($scope, $routeParams, DataFactory) {
    $scope.section = 'DETAILS'
    var idStudent = $routeParams.index;

    $scope.student = DataFactory.getStudent(idStudent)
  })