app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'allMoviesController',
        templateUrl: 'templates/most-popular-movies.html'
    }).when('/movie/:id', {
        controller: 'GetSingleUsers',
        templateUrl: 'templates/singleUser.html'
    })
});