(function() {
    angular
        .module('app')
        .controller('RecipeListController', RecipeListController)

    function RecipeListController() {
        var vm = this;
        // vm.recipes = [{
        //     id: '1',
        //     name: 'Scrambled Eggs',
        //     description: 'They are eggs.',
        //     ingredients: ['milk', 'eggs', 'cheese'],
        //     image: 'scrambled_eggs.jpeg'
        // }
        vm.allergens = ['bread', 'nuts', 'eggs', 'other kind of bread'];
        vm.diets = ['vegan', 'vegetarian', 'extra vegan'];
        $(function() {
            $.get('https://nuisepic.com/recipedb')
                .done(function(res) {
                    vm.recipes = res.data;
                })
                .fail(function(err) {
                    console.log(err)
                });

            $('#search').keypress(function(e) {
                // Enter key pressed
                if (e.which == 10 || e.which == 13) { 
                    $('form').submit(function() {
                        e.preventDefault();
                    });
                }
            });
        });
    }
}());
