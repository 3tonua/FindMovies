app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'homeController',
        templateUrl: 'templates/home.html'
    }).when('/all-movies', {
        controller: 'allMoviesController',
        templateUrl: 'templates/all-movies.html'
    }).when('/all-tv', {
        controller: 'allTvsController',
        templateUrl: 'templates/all-tv.html'
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
    }).when('/popular-movies', {
        controller: 'popularMoviesController',
        templateUrl: 'templates/popular-movies.html'
    }).when('/now-movies', {
        controller: 'nowMoviesController',
        templateUrl: 'templates/now-movies.html'
    }).when('/popular-tv', {
        controller: 'popularTvController',
        templateUrl: 'templates/popular-tv.html'
    }).when('/on-tv', {
        controller: 'onTvController',
        templateUrl: 'templates/on-tv.html'
    })
});