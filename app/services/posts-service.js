export default ['$http', '$q', function($http, $q) {

    return {
        getDescriptiveMetaInfo() {
            var deferred = $q.defer();
            $http.get('./app/apis/posts-meta.json', { cache: true }).then(response =>
                deferred.resolve(response.data)
            );

            return deferred.promise;
        },

        getPost(post_id) {
            var deferred = $q.defer();
            $http.get('./app/apis/posts/' + post_id + '.json', { cache: true }).then(response =>
                deferred.resolve(response.data)
            );

            return deferred.promise;
        }
    }
}];
