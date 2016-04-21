import moment from 'moment'

export default ['$http', function($http) {
    var posts_metas = [];
    var posts_contents = {};

    $http.get('_posts/').then(
        (response) => {
            for (let post_title of response.data) {
                populatePostsMetaInformation(post_title);
                fetchAndPopulatePostsContents(post_title);
            }

            function populatePostsMetaInformation(post_title) {
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

            function fetchAndPopulatePostsContents(post_title) {
                var post_contents = {};

                posts_contents.title = post_title;
                $http.get('_posts/' + post_title).then(
                    (post_contents) => {
                        posts_contents.contents = post_contents.data;
                    }
                )
            }
        });

    return {

        getDescriptiveMetaInfo: function() {
            return posts_metas;
        }
    }
}];
