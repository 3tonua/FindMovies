app.controller('watchlistController', function ($scope, API) {
    var array = localStorage;
    console.log(array);
    $rootScope.watchlistCount = localStorage.length;
    console.log($scope.watchlistCount)
});