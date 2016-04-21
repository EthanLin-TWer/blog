import ngRoute from 'angular-route'
import hcMarked from 'angular-marked'

import routeController from './route-controller'
import postsController from './posts/posts-controller'
import aboutController from './about/about-controller'

import postsService from './posts/posts-service'

import hljs from 'highlight.js'

angular.module('BlogApp', [
        ngRoute,
        hcMarked
    ])
    .factory('postsService', postsService)
    .controller('routeController', routeController)
    .controller('postsController', postsController)
    .controller('aboutController', aboutController)
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/posts/home.html',
                controller: 'postsController'
            })
            .when('/posts/:postId', {
                templateUrl: '/app/posts/post.html',
                controller: 'postsController'
            })
            .when('/about', {
                templateUrl: '/app/about/about.html',
                controller: 'aboutController'
            });
    })
    .config(['markedProvider', function (markedProvider) {
        markedProvider.setOptions({
            gfm: true,
            tables: true,
            highlight: function (code, lang) {
                if (lang) {
                    return hljs.highlight(lang, code, true).value;
                } else {
                    return hljs.highlightAuto(code).value;
                }
            }
        });
    }])
    ;
