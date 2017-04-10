app.controller('tvController', function ($scope, $routeParams, API, $sce) {
    API.getSerials().then(function (serials) {
        var id = $routeParams.id;
        console.log(id);
        $scope.serials = serials.results;
        console.log($scope.serials[0]);
        $scope.titleName = $scope.serials[0].name + ' Official trailer ';
        console.log($scope.titleName);
        API.getYoutubeTrailers($scope.titleName).then(function (idFromYoutube) {
            $scope.idFromYoutube = idFromYoutube;
            $scope.urlYoutube = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + idFromYoutube);
        })
    });
});