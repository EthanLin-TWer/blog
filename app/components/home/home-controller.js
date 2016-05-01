'use strict';

export default ['$scope', 'postsService', ($scope, postsService) => {
    postsService.getDescriptiveMetaInfo().success(response => {
        $scope.postsMeta = response;
    });
}]
