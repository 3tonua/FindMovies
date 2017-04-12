app.controller('allTvsController', function ($scope, API) {
    API.getTvs().then(function (serials) {
        console.log(serials);
        console.log(serials.results);
        $scope.serials = serials.results;
        $scope.pages = serials
    });
});