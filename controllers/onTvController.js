app.controller('onTvController', function ($scope, API) {

    //Даты
    var nowDate = moment().format('YYYY-MM-DD');
    var beforeDate = moment().subtract('days', 14).format('YYYY-MM-DD');
    moment.lang('ru');

    $scope.counter = 1;
    $scope.url = 'https://api.themoviedb.org/3/discover/tv?primary_release_date.gte=' + beforeDate + '&primary_release_date.lte=' + nowDate;
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