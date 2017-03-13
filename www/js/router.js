(function() {
    angular
        .module('app')
        .config(Router)

    function Router($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/list.html',
                controller: 'RecipeListController',
                controllerAs: 'vm'
            })
            .when('/recipe-details/:id', {
                templateUrl: 'views/recipe.html',
                controller: 'RecipeController',
                controllerAs: 'vm'
            });
    }
}());
