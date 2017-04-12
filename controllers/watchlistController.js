app.controller('watchlistController', function ($scope, API) {
    var array = localStorage;
    console.log(array);
    $scope.watchlistCount = localStorage.length;
    console.log($scope.watchlistCount)
});