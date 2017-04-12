app.controller('nowMoviesController', function ($scope, API) {

    //Даты
    var nowDate = moment().format('YYYY-MM-DD');
    var beforeDate = moment().subtract('days', 14).format('YYYY-MM-DD');
    moment.lang('ru');

    $scope.counter = 1;
    $scope.url = 'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=' + beforeDate + '&primary_release_date.lte=' + nowDate;
    console.log($scope.url);
    API.getMovies($scope.url, $scope.counter).then(function (movies) {
        // console.log(movies.results);
        $scope.movies = movies.results
    });

    $scope.countplus = function () {
        $scope.counter = $scope.counter + 1;
        console.log($scope.url, $scope.counter);
        API.getMovies($scope.url, $scope.counter).then(function (movies) {
            // console.log(movies.results);
            $scope.movies = movies.results
        });
    };

    $scope.countminus = function () {
        $scope.counter = $scope.counter - 1;
        console.log($scope.url, $scope.counter);
        API.getMovies($scope.url, $scope.counter).then(function (movies) {
            // console.log(movies.results);
            $scope.movies = movies.results
        });
    };
});