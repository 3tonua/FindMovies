app.controller('allMoviesController', function ($scope, API) {

    $scope.counter = 1;
    $scope.url = 'https://api.themoviedb.org/3/discover/movie';

    API.getMostPopularMovies($scope.url, $scope.counter).then(function (movies) {
        // console.log(movies.results);
        $scope.movies = movies.results
    });

    $scope.countplus = function () {
        $scope.counter = $scope.counter + 1;
        console.log($scope.url, $scope.counter);
        API.getMostPopularMovies($scope.url, $scope.counter).then(function (movies) {
            // console.log(movies.results);
            $scope.movies = movies.results
        });
    };

    $scope.countminus = function () {
        $scope.counter = $scope.counter - 1;
        console.log($scope.url, $scope.counter);
        API.getMostPopularMovies($scope.url, $scope.counter).then(function (movies) {
            // console.log(movies.results);
            $scope.movies = movies.results
        });
    };

    console.log($scope.counter);

});