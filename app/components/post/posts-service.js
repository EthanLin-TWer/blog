export default ['$http', 'CacheFactory', function($http, CacheFactory) {
    if (!CacheFactory.get('postMetaCache')) {
        CacheFactory('postMetaCache', { deleteOnExpire: 'aggressive' });
    }

    if (!CacheFactory.get('postCache')) {
        CacheFactory('postCache', { deleteOnExpire: 'aggressive' });
    }

    return {
        getDescriptiveMetaInfo() {
            var deferred = $q.defer();
            $http.get('./app/apis/posts-meta.json', {
                cache: CacheFactory.get('postMetaCache')
            }).then(response => deferred.resolve(response.data));

            return deferred.promise;
        },

        getPost(post_id) {
            var deferred = $q.defer();
            $http.get('./app/apis/posts-content.json').then(response =>
                 deferred.resolve(response.data.filter(post => post.id === post_id)[0])
             );

            return deferred.promise;
        }
    }
}];
