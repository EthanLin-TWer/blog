import ngRoute from 'angular-route'
import ngCache from 'angular-cache'
import hcMarked from 'angular-marked'

import RouteController from './route-controller'
import HomeController from './components/home/home-controller'
import PostController from './components/post/post-controller'
import AboutController from './components/about/about-controller'

import postsService from './services/posts-service'

// import hljs from 'highlight.js'

angular.module('BlogApp', [
        ngRoute,
        ngCache,
        hcMarked
    ])
    .factory('postsService', postsService)
    .controller('RouteController', RouteController)
    .controller('HomeController', HomeController)
    .controller('PostController', PostController)
    .controller('AboutController', AboutController)
    .config($routeProvider => { $routeProvider
        .when('/', {
            templateUrl: '/app/components/home/home.html',
            controller: 'HomeController'
        })
        .when('/posts/:postId', {
            templateUrl: '/app/components/post/post.html',
            controller: 'PostController'
        })
        .when('/about', {
            templateUrl: '/app/components/about/about.html',
            controller: 'AboutController'
        });
    })
    .config(CacheFactoryProvider => {
        angular.extend(CacheFactoryProvider.defaults, { maxAge: 15 * 60 * 1000 });
    })
    // .config(['markedProvider', function (markedProvider) {
    //     markedProvider.setOptions({
    //         gfm: true,
    //         tables: true,
    //         highlight: function (code, lang) {
    //             if (lang) {
    //                 return hljs.highlight(lang, code, true).value;
    //             } else {
    //                 return hljs.highlightAuto(code).value;
    //             }
    //         }
    //     });
    // }])
    ;
