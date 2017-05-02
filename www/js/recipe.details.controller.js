(function() {
    angular
        .module('recipe')
        .controller('RecipeDetailsController', RecipeDetailsController)

    RecipeDetailsController.$inject = ['$log', '$stateParams', 'Recipe'];
    function RecipeDetailsController($log, $stateParams, Recipe) {
        var vm = this;
        var id = $stateParams.recipeId;

        activate();

        function activate() {
            Recipe.one(id)
            .then(function(res) {
                console.log(res.data[0]);
                vm.recipe = res.data[0]; 
            })
            .catch(function() {
                //TODO: Display error to user
                $log.error('Error retrieving recipe')
            });

        }
    }
}());
