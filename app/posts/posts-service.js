import 'moment'

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

    var posts_metas = [];
    var postsBaseDirectory = 'https://api.github.com/repos/linesh-simplicity/linesh-simplicity.github.io/contents/_posts/';

    $http.get(postsBaseDirectory).then(function (response){
        for (let item of response.data) {
            var post = {};
            post.title = item.name;
            post.url = resolveUrl(item.name);
            post.date = resolveDate(item.name);

            posts_metas.push(post);
        }

        function resolveUrl(article_name) {
            return '#posts/' + article_name;
        }

        function resolveDate(article_name) {
            var postDate = _date(article_name);

            return moment(postDate, 'DD-MMM-GG');
        }

        function _date(article_name) {
            return article_name.substring(0, 10);
        }
    });

    return {
        getPosts: function() {
            return posts;
        },
        getDescriptiveMetaInfo: function() {
            return posts_metas;
        }
    }
}];
