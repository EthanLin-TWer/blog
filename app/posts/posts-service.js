export default ['$http', function($http) {
    var posts_metas = [];
    var posts = [];

    var local_posts_root = '_posts/';
    var github_posts_root = 'https://api.github.com/repos/linesh-simplicity/linesh-simplicity.github.io/contents/_posts';
    var post_raw_content_root = 'https://raw.githubusercontent.com/linesh-simplicity/linesh-simplicity.github.io/master/_posts/';

    $http.get('posts-meta.json').then(
        (response) => {
            for (let post_meta of response.data) {
                var post_details = {};

                post_details.path = post_meta.path;
                post_details.date = post_meta.key.substring(0, 10); // 2016-03-28-article-name.md
                post_details.url = '#posts/' + post_meta.key;
                post_details.title = post_meta.title;
                // post content with jekyll header stripped, it's an asynchronous call,
                // so no impacted with loading time
                $http.get(post_raw_content_root + post_meta.path).then(response => {
                    posts.push({
                        'id': post_meta.key,
                        'title': post_meta.title,
                        'contents': response.data.split('---')[2]
                    });
                    console.log(post_details.contents);
                })

                posts_metas.push(post_details);
            }
        });

    return {

        getDescriptiveMetaInfo: function() {
            return posts_metas;
        },

        getPost: function(post_id) {
            return posts.filter(post => post.id === post_id)[0];
        }
    }
}];
