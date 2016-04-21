import moment from 'moment'

export default ['$http', function($http) {
    var posts_metas = [];

    $http.get('_posts/').then(
        (response) => {
            for (let post_title of response.data) {
                var post = {};

                post.title = post_title;
                post.url = '#posts/' + post_title;
                post.date = moment(extractDate(post_title)).format('DD-MMM-GGGG');

                posts_metas.push(post);
            }

            function extractDate(post_title) {
                // article_name is in '2016-03-28-article-name.md' like format
                return post_title.substring(0, 10);
            }
        });

    return {

        getDescriptiveMetaInfo: function() {
            return posts_metas;
        }
    }
}];
