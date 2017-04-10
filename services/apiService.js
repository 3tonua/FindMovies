app.service ('API', function ($http, $q, apiKeys) {
    return {
        getMostPopularMovies: function () {
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22',
                params: {
                    api_key: apiKeys.tmdb,
                    page: 1,
                    language: "ru-UA"
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
                    page: 1,
                    language: "ru-UA"
                }
            }).then(function (data) {
                console.log(data);
                var serials = data.data;
                d.resolve(serials)
            });
            return d.promise
        },
        getYoutubeTrailers: function (titleName) {
            console.log(titleName);
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'https://www.googleapis.com/youtube/v3/search',
                params: {
                    part: "snippet",
                    key: apiKeys.youtube,
                    maxResults: 1,
                    q: 'Official trailer' + titleName,
                    regionCode: "UA"
                }
            }).then(function (data) {
                console.log(data);
                var idFromYoutube = data.data.items[0].id.videoId;
                console.log(idFromYoutube);
                d.resolve(idFromYoutube)
            });
            return d.promise
        }
    }
});