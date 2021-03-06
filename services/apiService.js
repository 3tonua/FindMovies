app.service ('API', function ($http, $q, apiKeys) {
    return {
        getMovies: function (url, counter) {
            var d = $q.defer();
            $http({
                method: 'GET',
                url: url,
                params: {
                    api_key: apiKeys.tmdb,
                    page: counter,
                    language: "ru-UA"
                }
            }).then(function (data) {
                // console.log(data);
                var movies = data.data;
                d.resolve(movies)
            });
            return d.promise
        },
        getTvs: function (url, counter) {
            var d = $q.defer();
            $http({
                method: 'GET',
                url: url,
                params: {
                    api_key: apiKeys.tmdb,
                    page: counter,
                    language: "ru-UA"
                }
            }).then(function (data) {
                // console.log(data);
                var serials = data.data;
                d.resolve(serials)
            });
            return d.promise
        },
        getMovie: function (idMovie) {
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/' + idMovie,
                params: {
                    api_key: apiKeys.tmdb,
                    language: "ru-UA"
                }
            }).then(function (data) {
                var openMovie = data.data;
                d.resolve(openMovie)
            });
            return d.promise
        },
        getTv: function (idTv) {
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/tv/' + idTv,
                params: {
                    api_key: apiKeys.tmdb,
                    language: "ru-UA"
                }
            }).then(function (data) {
                // console.log(data.data);
                var openTv = data.data;
                d.resolve(openTv)
            });
            return d.promise
        },
        getMovieSearch: function (search) {
            console.log(search);
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/movie',
                params: {
                    query: search,
                    api_key: apiKeys.tmdb,
                    language: "ru-UA"
                }
            }).then(function (data) {
                console.log(data.data);
                var searchedMovie = data.data;
                d.resolve(searchedMovie);
            });
            return d.promise
        },
        getYoutubeTrailers: function (titleName) {
            // console.log(titleName);
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'https://www.googleapis.com/youtube/v3/search',
                params: {
                    part: "snippet",
                    key: apiKeys.youtube,
                    maxResults: 1,
                    q: titleName,
                    regionCode: "UA"
                }
            }).then(function (data) {
                // console.log(data);
                var idFromYoutube = data.data.items[0].id.videoId;
                d.resolve(idFromYoutube)
            });
            return d.promise
        }
    }
});