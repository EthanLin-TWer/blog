export default ['$http', '$q', function($http, $q) {
    var posts = [];
    var postsUrl = [
        'https://raw.githubusercontent.com/linesh-simplicity/linesh-simplicity.github.io/master/_posts/2016-03-11-elegant-mac-iterm2.md',
        'https://raw.githubusercontent.com/linesh-simplicity/linesh-simplicity.github.io/master/_posts/2016-03-13-elegant-mac-oh-my-zsh.md'
    ];

    $q.all([
        $http.get(postsUrl[0]), $http.get(postsUrl[1])
    ]).then(response=> {
        for (let item of response) {
            posts.push(item.data);
        }
    });

    return {
        getPosts: function() {
            return posts;
        }
    }
}];
