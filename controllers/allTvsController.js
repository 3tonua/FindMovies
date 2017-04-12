app.controller('allTvsController', function ($scope, API) {

    $scope.counter = 1;
    $scope.url = 'https://api.themoviedb.org/3/discover/tv';
    console.log($scope.url);
    API.getTvs($scope.url, $scope.counter).then(function (serials) {
        // console.log(serials.results);
        $scope.serials = serials.results
    });

    $scope.countplus = function () {
        $scope.counter = $scope.counter + 1;
        console.log($scope.url, $scope.counter);
        API.getTvs($scope.url, $scope.counter).then(function (serials) {
            // console.log(serials.results);
            $scope.serials = serials.results
        });
    };

    $scope.countminus = function () {
        $scope.counter = $scope.counter - 1;
        console.log($scope.url, $scope.counter);
        API.getTvs($scope.url, $scope.counter).then(function (serials) {
            // console.log(serials.results);
            $scope.serials = serials.results
        });
    };

    $scope.watchlistCount = localStorage.length;
});