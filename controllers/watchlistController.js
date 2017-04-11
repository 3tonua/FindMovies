app.controller('watchlistController', function ($scope, API) {
    var returnObj = JSON.parse(localStorage.getItem("myKey")); //спарсим его обратно объект
    console.log(returnObj);
    console.log($scope.id = returnObj[0].item);
});