import moment from 'moment'

export default ['$http', function($http) {
    var posts_metas = [];

    $http.get('_posts/').then(
        (response) => {
            for (let file_name of response.data) {
                $http.get('_posts/' + file_name).then(
                    response => {
                        var post_details = {};

                        post_details.title = file_name;
                        post_details.date = moment(extractDate(file_name)).format('DD-MMM-GGGG');
                        post_details.contents = response.data;
                        post_details.url = '#posts/' + extractUrl(file_name);

                        posts_metas.push(post_details);
                    }
                );

                function extractTitle(file_name) {
                    return file_name;
                }

                function extractUrl(file_name) {
                    return file_name.substring(0, file_name.indexOf('.md'));
                }

                function extractDate(file_name) {
                    // article_name is in '2016-03-28-article-name.md' like format
                    return file_name.substring(0, 10);
                }
            }
        });

    return {

        getDescriptiveMetaInfo: function() {
            return posts_metas;
        }
    }
}];
