app.service ('API', function ($http, $q) {
    return {
        getMostPopularMovies: function () {
            var key = 'aa1625f9990899f7cfc5676de6cf520d';
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22',
                params: {
                    api_key: key
                }
            }).then(function (data) {
                console.log(data);
                var movies = data.data;
                d.resolve(movies)
            });
            return d.promise
        }
    }
});