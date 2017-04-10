app.controller('movieController', function ($scope, $routeParams, API, $sce) {
    API.getMovie($routeParams.id).then(function (openMovie) {
        $scope.titleName = openMovie.original_title + ' Trailer';
        API.getYoutubeTrailers($scope.titleName).then(function (idFromYoutube) {
            $scope.idFromYoutube = idFromYoutube;
            $scope.urlYoutube = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + idFromYoutube);
        })
    });
});