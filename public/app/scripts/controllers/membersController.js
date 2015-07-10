define(['./module'], function(controllers) {
    'use strict';
    controllers.controller('MembersController', ['$scope', '$log', '$routeParams', 'MemberService',
        function($scope, $log, $routeParams, MemberService) {            
            // Single Member Page
            if ($routeParams.member) {
            	$scope.member = new MemberService();
            	$scope.member.fetchByUsername($routeParams.member);
            } else { // All Memmbers Page
            	$scope.members = new MemberService();
                $scope.members.fetchAll();
            }
        }
    ]);
});