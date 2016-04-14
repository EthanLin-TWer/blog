export default ['$scope', '$route', '$routeParams', function($scope, $route, $routeParams) {
    $scope.$route = $route;
    $scope.$routeParams = $routeParams;
}]
