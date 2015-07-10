define([
    'angular',
    'angular-route',
    'angular-bootstrap',
    'angular-bootstrap-tpl',
    'loading-bar',
    'spahql',
    'angular-sanitize',
    'showdown',
    'angular-markdown-directive',
    '../app/scripts/controllers/index',
    '../app/scripts/directives/index',
    '../app/scripts/filters/index',
    '../app/scripts/services/index'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services',
        'ngRoute',
        'ui.bootstrap',
        'angular-loading-bar',
        'btford.markdown'
    ]);
});
