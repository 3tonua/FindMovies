app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'homeController',
        templateUrl: 'templates/home.html'
    }).when('/popular', {
        controller: 'allMoviesController',
        templateUrl: 'templates/popular-movies.html'
    }).when('/popular-tv', {
        controller: 'tvSerialsController',
        templateUrl: 'templates/tv-serials.html'
    }).when('/movie/:id', {
        controller: 'movieController',
        templateUrl: 'templates/movie.html'
    }).when('/tv/:id', {
        controller: 'tvController',
        templateUrl: 'templates/tv.html'
    }).when('/about', {
        controller: '',
        templateUrl: 'templates/about.html'
    }).when('/watchlist', {
        controller: 'watchlistController',
        templateUrl: 'templates/watchlist.html'
    })
});