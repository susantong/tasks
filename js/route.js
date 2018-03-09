const app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/todos', {templateUrl: '/html/todos.html'})
    .when('/slider', {templateUrl: '/html/slider.html'})
    .when('/help', {templateUrl: '/html/help.html'})
}]);