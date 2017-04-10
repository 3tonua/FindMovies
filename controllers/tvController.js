app.controller('tvController', function ($scope, $routeParams, API, $sce) {
    API.getTv($routeParams.id).then(function (openTv) {
        $scope.titleName = openTv.name + ' Trailer';
        API.getYoutubeTrailers($scope.titleName).then(function (idFromYoutube) {
            $scope.idFromYoutube = idFromYoutube;
            $scope.urlYoutube = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + idFromYoutube);
        })
    });
});