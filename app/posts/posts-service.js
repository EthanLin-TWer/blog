import moment from 'moment'

export default ['$http', '$q', function($http, $q) {
    // var posts = [];
    // var postsUrl = [
    //     'https://raw.githubusercontent.com/linesh-simplicity/linesh-simplicity.github.io/master/_posts/2016-03-11-elegant-mac-iterm2.md',
    //     'https://raw.githubusercontent.com/linesh-simplicity/linesh-simplicity.github.io/master/_posts/2016-03-13-elegant-mac-oh-my-zsh.md'
    // ];
    //
    // $q.all([
    //     $http.get(postsUrl[0]), $http.get(postsUrl[1])
    // ]).then(response=> {
    //     for (let item of response) {
    //         posts.push(item.data);
    //     }
    // });

    var posts_metas = [];
    var posts_base_directory = 'https://api.github.com/repos/linesh-simplicity/linesh-simplicity.github.io/contents/_posts/';

    $http.get(posts_base_directory).then(function (response){
        for (let item of response.data) {
            var post = {};
            post.title = resolveTitle(item.name);
            post.url = resolveUrl(item.name);
            post.date = resolveDate(item.name);

            posts_metas.push(post);
        }

        function resolveTitle(article_name) {
            return article_name;
        }

        function resolveUrl(article_name) {
            return '#posts/' + article_name;
        }

        function resolveDate(article_name) {
            var post_date = _date(article_name);

            return moment(post_date).format('DD-MMM-GGGG');
        }

        function _date(article_name) {
            return article_name.substring(0, 10);    // article_name is in '2016-03-28-article-name.md' like format
        }
    });

    return {

        getDescriptiveMetaInfo: function() {
            return posts_metas;
        }
        // getPosts: function() {
        //     return posts;
        // },
    }
}];
