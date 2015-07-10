define(['./module'], function(services) {
    'use strict';

    services.factory('MemberService', ['$http', function($http) {
        function Member() {};

        Member.prototype = {
            setData: function(data) {
                angular.extend(this, data);
            },
            fetchAll: function() {
                var scope = this;
                $http.get('data/members.json', {cache: true}).
                success(function(data, status, headers, config) {
                    scope.setData(data);
                });
            },
            fetchByUsername: function(username) {
                var scope = this;
                $http.get('data/members.json', {cache: true}).
                success(function(data, status, headers, config) {
                    var db = SpahQL.db(data);
                    var member = db.select("/*[/username == '"+username+"']");
                    scope.setData(member.value());
                });
            }
        };

        return Member;
    }]);

});