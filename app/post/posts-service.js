export default ['$http', function($http) {
    var posts_metas = [];

    var posts = [];

    $http.get('posts-content.json').then(response => posts = response.data);

    $http.get('posts-meta.json').then(response => {
        response.data.map(post_meta => {
            posts_metas.push({
                'url': '#posts/' + post_meta.id,
                'date': post_meta.date,
                'title': post_meta.title
            });
        })
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
