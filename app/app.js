import angular from 'angular'
import postsController from './posts/posts-controller'

angular.module('BlogApp', [])
    .controller('postsController', postsController);
