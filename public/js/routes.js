define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'public/app/views/index.html',
            controller: 'IndexController'
        });

        $routeProvider.when('/members', {
            templateUrl: 'public/app/views/members.html',
            controller: 'MembersController'
        });

        $routeProvider.when('/members/:member', {
            templateUrl: 'public/app/views/members/member.html',
            controller: 'MembersController'
        });

        $routeProvider.when('/katas', {
            templateUrl: 'public/app/views/katas.html',
            controller: 'KatasController'
        });

        $routeProvider.when('/katas/:kata', {
            templateUrl: 'public/app/views/katas/kata.html',
            controller: 'KatasController'
        });

        $routeProvider.when('/about', {
            templateUrl: 'public/app/views/about.html',
            controller: 'AboutController'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);
});
