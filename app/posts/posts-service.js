export default ['$http', function($http) {
    var posts_metas = [];
    var posts = [];

    var local_posts_root = '_posts/';
    var github_posts_root = 'https://api.github.com/repos/linesh-simplicity/linesh-simplicity.github.io/contents/_posts';
    var post_raw_content_root = 'https://raw.githubusercontent.com/linesh-simplicity/linesh-simplicity.github.io/master/_posts/';

    $http.get('posts-meta.json').then(response => {
        response.data.map(post_meta => {
            posts_metas.push({
                'url': '#posts/' + post_meta.key,
                'date': post_meta.date,
                'title': post_meta.title
            });
        })
    });

    $http.get('posts-content.json').then(response => {
        response.data.map(post => {
            posts.push({
                'id': post.key,
                'title': post.title,
                'contents': post.contents
            });
        })
    })

    return {

        getDescriptiveMetaInfo: function() {
            return posts_metas;
        },

        getPost: function(post_id) {
            return posts.filter(post => post.id === post_id)[0];
        }
    }
}];
