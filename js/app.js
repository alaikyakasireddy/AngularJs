// Copyright (c) 2012, David Haglund
/*globals angular,SearchCtrl,UserCtrl,RepoCtrl */

// Declare app level module which depends on filters, and services
angular.module('ghContrib', ['ghContrib.services']).
    config(['$routeProvider', function ($routeProvider) {
        'use strict';
        $routeProvider.when('/', {
            templateUrl: 'partials/search.html',
            controller: SearchCtrl
        });
        $routeProvider.when('/github/:user/', {
            templateUrl: 'partials/user.html',
            controller: UserCtrl
        });
        $routeProvider.when('/github/:user/:repo/', {
            templateUrl: 'partials/repo.html',
            controller: RepoCtrl
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);
