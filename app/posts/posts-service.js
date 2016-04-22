import moment from 'moment'

export default ['$http', function($http) {
    var posts_metas = [];

    var local_posts_root = '_posts/';
    var github_posts_root = ' https://api.github.com/repos/linesh-simplicity/linesh-simplicity.github.io/contents/_posts/';
    var post_raw_content_root = 'https://raw.githubusercontent.com/linesh-simplicity/linesh-simplicity.github.io/master/_posts/';

    $http.get(github_posts_root).then(
        (response) => {
            var file_names = response.data.map(item => {
                return item.name;
            });

            for (let file_name of file_names) {
                $http.get(post_raw_content_root + file_name).then(
                    response => {
                        var post_details = {};

                        post_details.id = extractId(file_name)
                        post_details.date = moment(extractDate(file_name)).format('DD-MMM-GGGG');
                        post_details.url = '#posts/' + extractId(file_name);
                        post_details.contents = response.data;
                        post_details.title = extractTitle(post_details.contents);

                        posts_metas.push(post_details);
                    }
                );

                function extractTitle(post_contents) {
                    var jekyll_separator = '---';

                    var jekyll_header = post_contents.split(jekyll_separator)[1];
                    return jekyll_header.substring((jekyll_header.indexOf('title: ') + 'title: '.length), jekyll_header.length);
                }

                function extractId(file_name) {
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
        },

        getPost: function(post_id) {
            return posts_metas.filter(post => post.id === post_id)[0];
        }
    }
}];
