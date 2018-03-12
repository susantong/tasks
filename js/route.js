const app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', ($routeProvider) => {
    $routeProvider
    .when('/todos', {templateUrl: '../../html/todos.html'})
    .when('/bar', {templateUrl: '../../html/bar.html'})
    .when('/help', {templateUrl: '/html/help.html'})
}]);