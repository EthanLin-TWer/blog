export default ['$scope', '$routeParams', 'postsService', ($scope, $routeParams, postsService) => {
    postsService.getPost($routeParams.postId).then(currentPost => {
        $scope.currentPost = currentPost;
    });
}]
