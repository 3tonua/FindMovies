app.controller('allMoviesController', function ($scope, API) {
    $scope.movies = [];
    API.getMostPopularMovies().then(function (movies, $scope) {
        console.log(movies);
        console.log(movies.results);
        $scope.movies = movies.results
    });




});