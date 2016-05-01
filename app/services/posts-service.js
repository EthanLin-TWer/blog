export default ['$http', function($http) {

    return {
        getDescriptiveMetaInfo() {
            return $http.get('./app/apis/posts-meta.json', { cache: true });
        },

        getPost(post_id) {
            return $http.get('./app/apis/posts/' + post_id + '.json', { cache: true });
        }
    }
}];
