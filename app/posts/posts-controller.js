'use strict';

export default ['$scope', '$http', ($scope, $http) => {
    $scope.posts = [];

    $http.get('https://raw.githubusercontent.com/linesh-simplicity/linesh-simplicity.github.io/master/_posts/2016-03-11-elegant-mac-iterm2.md')
        .then(function(response) {
            $scope.posts.push(response.data);
    });

    $http.get('https://raw.githubusercontent.com/linesh-simplicity/linesh-simplicity.github.io/master/_posts/2016-03-13-elegant-mac-oh-my-zsh.md')
        .then(function(response) {
            $scope.posts.push(response.data);
    });
}];
