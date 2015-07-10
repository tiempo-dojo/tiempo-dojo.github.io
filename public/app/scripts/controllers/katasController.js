define(['./module'], function(controllers) {
    'use strict';
    controllers.controller('KatasController', ['$scope', '$log', '$routeParams', 'KataService',
        function($scope, $log, $routeParams, KataService) {            
            // Single Kata Page
            if ($routeParams.kata) {
            	$scope.kata = new KataService();
            	$scope.kata.fetchByTitle($routeParams.kata);
            } else { // All Katas Page
            	$scope.katas = new KataService();
                $scope.katas.fetchAll();
            }
        }
    ]);
});