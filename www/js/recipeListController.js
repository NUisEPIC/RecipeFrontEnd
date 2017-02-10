(function() {
    angular
        .module('app')
        .controller('RecipeListController', RecipeListController)

    function RecipeListController() {
        var vm = this;
        vm.recipes = [{
            id: '1',
            name: 'Scrambled Eggs',
            description: 'They are eggs.',
            ingredients: ['milk', 'eggs', 'cheese']
        }, {
            id: '0',
            name: 'Toast',
            description: 'Can\'t fuck this one up',
            ingredients: ['bread']
        }];

        $(function() {
            $('#search').keypress(function(e) {
                // Enter key pressed
                if (e.which == 10 || e.which == 13) { 
                    $('form').submit(function() {
                        e.preventDefault();
                        
                    });
                }
            });
        })
    }
}());
