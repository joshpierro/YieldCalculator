
var app = angular.module('angularApp', ['ui.router', 'ngMaterial', 'ng-currency']);

app.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

    //themes
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange');

    $urlRouterProvider.otherwise("/app/calculator");

    //set up the states
    $stateProvider
         .state('app', {
             url: "/app",
             controller: 'App',
             controllerAs: 'vm',
             abstract: true,
             templateUrl: "../App/App.html"
         })
        .state('app.calculator', {
            url: "/calculator",
            controller: 'Calculator',
            controllerAs: 'vm',
            templateUrl: "../App/calculator.html",
            params: {area:'calculator'}
        })
        .state('app.results', {
            url: "/results",
            controller: 'Results',
            controllerAs: 'vm',
            templateUrl: "../App/results.html",
            params: { area: 'results' }
        })
     .state('app.settings', {
         url: "/settings",
         controller: 'Settings',
         controllerAs: 'vm',
         templateUrl: "../App/settings.html",
         params: { area: 'settings' }
     });
});