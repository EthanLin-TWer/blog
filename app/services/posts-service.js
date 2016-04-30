export default ['$http', '$q', 'CacheFactory', function($http, $q, CacheFactory) {

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
            $http.get('./app/apis/posts-content.json', { cache: true }).then(response =>
                deferred.resolve(response.data.filter(post => post.id === post_id)[0])
            );

            return deferred.promise;
        }
    }
}];
