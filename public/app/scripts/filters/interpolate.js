define(['./module'], function (filters) {
    'use strict';

    return filters.filter('interpolate', [function () {
        return function () {
            return '';
        }
    }]);
});
