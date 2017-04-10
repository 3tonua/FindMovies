app.controller('allMoviesController', function ($scope, API) {
    API.getMostPopularMovies().then(function (movies) {
        console.log(movies);
        console.log(movies.results);
        $scope.movies = movies.results
    });
});