app.controller('tvController', function ($scope, $routeParams, API, $sce) {
    API.getTv($routeParams.id).then(function (openTv) {
        $scope.openTv = openTv;
        console.log(openTv);

        //Название для youtube запроса
        $scope.titleName = openTv.original_name + ' Trailer';
        console.log($scope.titleName);
        API.getYoutubeTrailers($scope.titleName).then(function (idFromYoutube) {
            $scope.idFromYoutube = idFromYoutube;
            $scope.urlYoutube = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + idFromYoutube);
        });

        //Дата выхода
        $scope.date = moment(openTv.release_date).format('DD.MM.YYYY');
        $scope.year = moment(openTv.release_date).format('YYYY');    });
});