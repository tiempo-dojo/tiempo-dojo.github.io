define(['./module'], function(services) {
    'use strict';

    services.factory('KataService', ['$http', function($http) {
        function Kata() {};

        Kata.prototype = {
            setData: function(data) {
                angular.extend(this, data);
            },
            fetchAll: function() {
                var scope = this;
                $http.get('data/katas.json', {cache: true}).
                success(function(data, status, headers, config) {
                    scope.setData(data);
                });
            },
            fetchByTitle: function(file) {
                var scope = this;
                $http.get('data/katas.json', {cache: true}).
                success(function(data, status, headers, config) {
                    var db = SpahQL.db(data);
                    var kata = db.select("/*[/file == '"+file+"']");
                    kata = kata.value();
                    $http.get('https://api.github.com/repos/tiempo-dojo/'+kata.file+'/readme', {cache: true}).
                    success(function(data){
                        scope.setData({
                            "title" : kata.title,
                            "content" : atob(data.content),
                            "edit" : data.html_url
                        });
                    })
                });
            }
        };

        return Kata;
    }]);

});