export default ['$scope', '$routeParams', 'postsService', ($scope, $routeParams, postsService) => {
    postsService.getPost($routeParams.postId).success(response => {
        $scope.currentPost = response;
    });
}]
