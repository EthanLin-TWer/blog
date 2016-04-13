'use strict';

angular.module('BlogApp', [])
    .controller('PostsController', ['$scope', function($scope) {
        $scope.hello = 'hello world';
    }]);
