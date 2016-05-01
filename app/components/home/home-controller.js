'use strict';

export default ['$scope', '$routeParams', 'postsService', ($scope, $routeParams, postsService) => {
    postsService.getDescriptiveMetaInfo().then(response => {
        $scope.postsMeta = response.data;
    });
}]
