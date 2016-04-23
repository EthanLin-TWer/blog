export default ['$http', function($http) {
    var posts_metas = [];

    var local_posts_root = '_posts/';
    var github_posts_root = 'https://api.github.com/repos/linesh-simplicity/linesh-simplicity.github.io/contents/_posts';
    var post_raw_content_root = 'https://raw.githubusercontent.com/linesh-simplicity/linesh-simplicity.github.io/master/_posts/';

    $http.get('posts-meta.json').then(
        (response) => {
            for (let post_meta of response.data) {
                var post_details = {};

                post_details.id = post_meta.key;
                post_details.path = post_meta.path;
                post_details.date = post_meta.key.substring(0, 10); // 2016-03-28-article-name.md
                post_details.url = '#posts/' + post_meta.key;
                post_details.title = post_meta.title;
                post_details.contents = '';

                posts_metas.push(post_details);
            }
        });

    return {

        getDescriptiveMetaInfo: function() {
            return posts_metas;
        },

        getPost: function(post_id) {
            var post = posts_metas.filter(post => post.id === post_id)[0];
            if (post && post.contents === '') {
                $http.get(post_raw_content_root + post.path).then(response => {
                    post.contents = response.data;
                });
            }

            return post;
        }
    }
}];
