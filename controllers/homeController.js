app.controller('homeController', function ($scope, API) {
    //Поиск по фильмам
    $scope.search = function () {
        $scope.$watch('searchInput', function (searchInput) {
            $scope.searchInput = searchInput
        });
        console.log($scope.searchInput);

        API.getMovieSearch($scope.searchInput).then(function (searchedMovies) {
            $scope.searched = searchedMovies.results;
            console.log(searchedMovies)
        })
    };
    $scope.searched = [];
});