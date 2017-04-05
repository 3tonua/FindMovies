app.controller('tvSerialsController', function ($scope, API) {
    API.getSerials().then(function (serials) {
        console.log(serials);
        console.log(serials.results);
        $scope.serials = serials.results;
        $scope.pages = serials
    });
});