import ngRoute from 'angular-route'
import ngCache from 'angular-cache'
import hcMarked from 'angular-marked'

import routeController from './route-controller'
import homeController from './components/home/home-controller'
import postController from './components/post/post-controller'
import aboutController from './components/about/about-controller'

import postsService from './services/posts-service'

import hljs from 'highlight.js'

angular.module('BlogApp', [
        ngRoute,
        ngCache,
        hcMarked
    ])
    .factory('postsService', postsService)
    .controller('routeController', routeController)
    .controller('homeController', homeController)
    .controller('postController', postController)
    .controller('aboutController', aboutController)
    .config($routeProvider => { $routeProvider
        .when('/', {
            templateUrl: '/app/components/home/home.html',
            controller: 'homeController'
        })
        .when('/posts/:postId', {
            templateUrl: '/app/components/post/post.html',
            controller: 'postController'
        })
        .when('/about', {
            templateUrl: '/app/components/about/about.html',
            controller: 'aboutController'
        });
    })
    .config(CacheFactoryProvider => {
        angular.extend(CacheFactoryProvider.defaults, { maxAge: 15 * 60 * 1000 });
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
