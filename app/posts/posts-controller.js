'use strict';

export default ['$scope', '$routeParams', 'postsService', ($scope, $routeParams, postsService) => {
    $scope.postsMeta = postsService.getDescriptiveMetaInfo();
    $scope.currentPost = postsService.getPost($routeParams.postId);
}];
