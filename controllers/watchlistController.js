app.controller('watchlistController', function ($scope, API) {
    // var returnObj = JSON.parse(localStorage.getItem("myKey")); //спарсим его обратно объект
    var array = localStorage;
    console.log(array);
    $scope.watchlistCount = localStorage.length;
    console.log($scope.watchlistCount)
});