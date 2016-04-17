import ngRoute from 'angular-route'

import routeController from './route-controller'
import postsController from './posts/posts-controller'
import aboutController from './about/about-controller'

import postsService from './posts/posts-service'

import hcMarked from 'angular-marked'
import moment from 'moment'

angular.module('BlogApp', [
        ngRoute,
        hcMarked,
        moment
    ])
    .factory('postsService', postsService)
    .controller('routeController', routeController)
    .controller('postsController', postsController)
    .controller('aboutController', aboutController)
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/posts/posts.html',
                controller: 'postsController'
            })
            .when('/about', {
                templateUrl: '/app/about/about.html',
                controller: 'aboutController'
            });
    });
