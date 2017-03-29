app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'homeController',
        templateUrl: 'templates/home.html'
    }).when('/popular', {
        controller: 'allMoviesController',
        templateUrl: 'templates/popular-movies.html'
    }).when('/movie/:id', {
        controller: 'GetSingleUsers',
        templateUrl: 'templates/singleUser.html'
    })
});