var app =angular.module('Router',['ui.router','ngRoute']);
app
  .config([
    '$httpProvider',
    '$routeProvider',
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    routeProvider
  ]);

function routeProvider (
  $httpProvider,
  $routeProvider,
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
) {
  'use strict';

  $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
  $locationProvider.html5Mode(true).hashPrefix('!');

  $urlRouterProvider
  .otherwise('/');

  $stateProvider
        .state('index',{       //首页
            url:'/',
            templateUrl:"views/user.html",
            controller:"userCtrl"
        })
        

}