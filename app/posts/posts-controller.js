'use strict';

export default ['$scope', '$http', ($scope, $http) => {
    $scope.posts = $http.get('https://api.github.com/repos/linesh-simplicity/linesh-simplicity.github.io/contents/_posts/')
        .then(function(response) {
            $scope.posts = response.data;
        });
}];
