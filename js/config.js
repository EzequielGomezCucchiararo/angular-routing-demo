angular.module('myRoutingApp')
  .config(function($routeProvider){

    $routeProvider
      .when('/', {
        templateUrl: 'js/home/template.html',
        controller: 'HomeController'
      })
      .when('/about', {
        templateUrl: 'js/about/template.html',
        controller: 'AboutController'
      })
      .when('/contact', {
        templateUrl: 'js/contact/template.html',
        controller: 'ContactController'
      })
      .when('/details/:index', {
        templateUrl: 'js/details/template.html',
        controller: 'DetailsController'
      })

  })
