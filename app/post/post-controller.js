export default ['$scope', '$routeParams', 'postsService', ($scope, $routeParams, postsService) => {
    $scope.currentPost = postsService.getPost($routeParams.postId);
}]
