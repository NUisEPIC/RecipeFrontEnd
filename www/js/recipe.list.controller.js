(function() {
    angular
        .module('recipe')
        .controller('RecipeListController', RecipeListController)

    RecipeListController.$inject = ['$http', 'Recipe']
    function RecipeListController($http, Recipe) {
        var vm = this;

        vm.search = search;
        vm.allergens = {
            'eggs': false,
            'dairy': false,
            'gluten': false,
            'peanuts': false,
            'tree nuts': false,
            'shellfish': false,
            'soy': false
        }
        vm.diets = {
            'kosher': false,
            'pescatarian': true,
            'vegan': false,
            'vegetarian': false,
        }
        vm.categories = {
            'breakfast': false,
            'dessert': false,
            'dinner': false,
            'finger food': false,
            'salad': false,
            'sauce': false,
            'sides': false,
            'soup': false
        }

        activate();

        function activate() {
            Recipe.all()
            .then(function(res) {
                vm.recipes = res.data;
            })
            .catch(function(err) {
                //TODO: Display error to user
                console.log('Error retrieving recipes list')
            })
        }

        function search() {
             var allergens = Object.keys(vm.allergens)
                .filter(function(key) {
                    return allergens[key] == true;
                });
             var diet = Object.keys(vm.diet)
                .filter(function(key) {
                    return diet[key] == true;
                });
             var categories = Object.keys(vm.categories)
                .filter(function(key) {
                    return categories[key] == true;
                });

            $http.get('https://nuisepic.com/recipedb/search/', {
                data: vm.keywords,
                mealtype: categories,
                diet: diet,
                allergies: allergies
            })
            //can have multiple allergies, so will have to make an array of all of them. this is temp
            .then(function(res) {
                console.log(res);
                vm.recipes = res.data.data;
            }, function(err) {
                console.log(err);
            });
        };
    }
}());
