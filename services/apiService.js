app.service ('API', function ($http, $q, apiKeys) {
    return {
        getMostPopularMovies: function () {
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22',
                params: {
                    api_key: apiKeys.tmdb,
                    page: 1
                }
            }).then(function (data) {
                console.log(data);
                var movies = data.data;
                d.resolve(movies)
            });
            return d.promise
        },
        getSerials: function () {
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/discover/tv',
                params: {
                    api_key: apiKeys.tmdb,
                    page: 1
                }
            }).then(function (data) {
                console.log(data);
                var serials = data.data;
                d.resolve(serials)
            });
            return d.promise
        },
        getYoutubeTrailers: function (params) {
            var key = 'AIzaSyD0KxGbBLA3r2EtQD6t0eUYIEztv2zKRHs';
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'https://www.googleapis.com/youtube/v3/search',
                params: {
                    part: "snippet",
                    key: apiKeys.youtube,
                    maxResults: 5,
                    q: params.query,
                    regionCode: params.regions
                }
            }).then(function (data) {
                var y_videos = data.data.items;
                console.log(y_videos[0]);

                d.resolve(y_videos)
            });
            return d.promise
        }
    }
});