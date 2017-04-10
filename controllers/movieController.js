app.controller('movieController', function ($scope, $routeParams, API, $sce) {
    API.getSerials().then(function (movies) {
        var id = $routeParams.id;
        console.log(id);
        $scope.movies = movies.results;
        console.log($scope.movies[0]);
        $scope.titleName = $scope.movies[0].name + ' Official trailer ';
        console.log($scope.titleName);
        API.getYoutubeTrailers($scope.titleName).then(function (idFromYoutube) {
            $scope.idFromYoutube = idFromYoutube;
            $scope.urlYoutube = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + idFromYoutube);
        })
    });
});