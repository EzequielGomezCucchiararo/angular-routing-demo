angular.module('myRoutingApp')
  .config(function($routeProvider){

    $routeProvider
      .when('/', {
        templateUrl: 'js/home/home.html',
        controller: 'HomeController'
      })
      .when('/about', {
        templateUrl: 'js/about/about.html',
        controller: 'AboutController'
      })
      .when('/contact', {
        templateUrl: 'js/contact/contact.html',
        controller: 'ContactController'
      })

  })
