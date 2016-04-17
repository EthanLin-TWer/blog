'use strict';

export default ['$scope', 'postsService', ($scope, postsService) => {
    // $scope.posts = postsService.getPosts();
    $scope.postsMeta = postsService.getDescriptiveMetaInfo();
}];
