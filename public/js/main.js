require.config({

    paths: {
        'domReady': '../app/vendors/requirejs-domready/domReady',
        'angular' : '../app/vendors/angular/angular.min',
        'angular-route' : '../app/vendors/angular-route/angular-route.min',
        'angular-bootstrap' : '../app/vendors/angular-bootstrap/ui-bootstrap.min',
        'angular-bootstrap-tpl' : '../app/vendors/angular-bootstrap/ui-bootstrap-tpls.min',
        'loading-bar' : '../app/vendors/angular-loading-bar/build/loading-bar.min',
        'spahql' : '../app/vendors/spahql/spahql-min',
        'angular-sanitize' : '../app/vendors/angular-sanitize/angular-sanitize.min',
        'showdown' : '../app/vendors/showdown/compressed/Showdown.min',
        'angular-markdown-directive' : '../app/vendors/angular-markdown-directive/markdown'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-bootstrap': {
            deps: ['angular']
        },
        'angular-bootstrap-tpl': {
            deps: ['angular-bootstrap']
        },
        'loading-bar': {
            deps: ['angular']
        },
        'spahql': {
            exports: 'spahql'
        },
        'angular-sanitize': {
            deps : ['angular']
        },
        'showdown': {
            exports : 'showdown'
        },
        'angular-markdown-directive': {
            deps: ['angular', 'showdown']
        }
    },

    deps: ['./bootstrap']
});