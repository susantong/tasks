const app = angular.module('app', ['ngRoute', 'ui.router']);

// app.config(['$routeProvider', ($routeProvider) => {
//     $routeProvider
//     .when('/todos', {
//         templateUrl: '../../html/todos.html'
//     })
//     .when('/bar', {
//         templateUrl: '../../html/bar.html'
//     })
//     .when('/help/:id', {
//         templateUrl: '../../html/help.html'
//     })
// }]);

app.config(['$stateProvider', ($stateProvider) => {
    $stateProvider
    .state('/', {
        url: '/'
    })
    .state('todos', {
        url: '/todos',
        templateUrl: '../../html/todos.html'
    })
    .state('bar', {
        url: '/bar',
        templateUrl: '../../html/bar.html'
    })
    .state('help', {
        url: '/help',
        templateUrl: '../../html/help.html'
    })
    .state('help.fifth', {
        url: '/fifth/:id/:name',
        template: '<p>this is ID: {{id}} NAME: {{name}}</p>',
        controller: function ($stateParams, $scope) {
            $scope.id = $stateParams.id;
            $scope.name = $stateParams.name;
        }
    })
    .state('help.fourth', {
        url: '/fourth/detail/:id/:name',
        template: '<p>this is ID: {{id}} NAME: {{name}}</p>',
        controller: function ($stateParams, $scope) {
            $scope.id = $stateParams.id;
            $scope.name = $stateParams.name;
        }
    })
}]);
        