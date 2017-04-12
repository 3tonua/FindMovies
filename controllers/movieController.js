app.controller('movieController', function ($scope, $routeParams, API, $sce) {
    API.getMovie($routeParams.id).then(function (openMovie) {
        $scope.openMovie = openMovie;
        console.log(openMovie);

        //Название для youtube запроса
        $scope.titleName = openMovie.original_title + ' Trailer';
        API.getYoutubeTrailers($scope.titleName).then(function (idFromYoutube) {
            $scope.idFromYoutube = idFromYoutube;
            $scope.urlYoutube = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + idFromYoutube);
        });

        //Дата выхода
        $scope.date = moment(openMovie.release_date).format('DD.MM.YYYY');
        $scope.year = moment(openMovie.release_date).format('YYYY');

        $scope.toWatchlist = function () {

            //Добавление в watchlist
            localStorage.setItem(openMovie.original_title, openMovie.id);
            //watchlist счетчик
            $scope.watchlistCount = localStorage.length;
        };

        $scope.watchlistCount = localStorage.length;
        console.log(localStorage);

    });


});