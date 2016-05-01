export default ['$scope', '$routeParams', 'postsService', ($scope, $routeParams, postsService) => {
    postsService.getPost($routeParams.postId).then(response => {
        $scope.currentPost = response.data;
    });
}]
