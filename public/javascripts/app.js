angular.module('contactApp', [
    'contactApp.login',
    'contactApp.profile',
    'contactApp.services',
    'ngRoute'
  ])

  .config(['$routeProvider', function($routeProvider) { 
    $routeProvider
      .when('/', {
        templateUrl: '/templates/login.html',
        controller: 'loginController'
      })
      .when('/profile', {
        templateUrl: '/templates/profile.html',
        controller: 'profileController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);