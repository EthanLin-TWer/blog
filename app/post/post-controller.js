export default ['$scope', '$routeParams', 'postsService', ($scope, $routeParams, postsService) => {
    console.log('routeparams: ' + $routeParams.postId);
    $scope.currentPost = postsService.getPost($routeParams.postId);
    console.log('current post: ' + $scope.currentPost.contents);
}]
