export default ['$http', '$q', 'CacheFactory', function($http, $q, CacheFactory) {
    if (!CacheFactory.get('postMetaCache')) {
        CacheFactory('postMetaCache', { deleteOnExpire: 'aggressive' });
    }

    if (!CacheFactory.get('postCache')) {
        CacheFactory('postCache', { deleteOnExpire: 'aggressive' });
    }

    return {
        getDescriptiveMetaInfo: function() {
            var deferred = $q.defer();
            $http.get('posts-meta.json', {
                cache: CacheFactory.get('postMetaCache')
            }).then(response => deferred.resolve(response.data));

            return deferred.promise;
        },

        getPost: function(post_id) {
            var deferred = $q.defer();
            $http.get('posts-content.json').then(response =>
                 deferred.resolve(response.data.filter(post => post.id === post_id)[0])
             );

            return deferred.promise;
        }
    }
}];
