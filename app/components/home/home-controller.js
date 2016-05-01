'use strict';

export default ['$scope', '$routeParams', 'postsService', ($scope, $routeParams, postsService) => {
    postsService.getDescriptiveMetaInfo().success(response => {
        $scope.postsMeta = response;
    });
}]
