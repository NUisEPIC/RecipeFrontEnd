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
                        $.get('https://localhost:2345/search/', {data: $('#search').val(),
							mealtype: $("#mealtype").val(),
							diet: $('#diet').val(),
							allergies: $('#allergies').val()}) //can have multiple allergies, so will have to make an array of all of them. this is temp
			    .done(function(res) {
				console.log("Do something here on success"); //temp
				vm.recipes = res.data;
			    });
			    .fail(function(err) {
				console.log(err);
			    });
                    });
                }
            });
        });
    }
}());
