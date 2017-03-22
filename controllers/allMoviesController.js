app.controller('allMoviesController', function ($scope, API) {
    $scope.movies = [];
    API.getMostPopularMovies().then(function (movies) {
        $scope.movies = movies;
        console.log(movies)
    })
});