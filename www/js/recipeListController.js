(function() {
    angular
        .module('app')
        .controller('RecipeListController', RecipeListController)

    RecipeListController.$inject = ['$http']
    function RecipeListController($http) {
        var vm = this;

        $(function() {
            $http.get('https://nuisepic.com/recipedb')
                .then(function(res) {
                    console.log(res)
                    vm.recipes = res.data.data;
                }, function(err) {
                    console.log(err)
                });

            $('#search').keypress(function(e) {
                // Enter key pressed
                if (e.which == 10 || e.which == 13) { 
                    $('form').submit(function() {
                        e.preventDefault();
                        $http.get('https://localhost:2345/search/', {
                            data: $('#search').val(),
							mealtype: $("#mealtype").val(),
							diet: $('#diet').val(),
							allergies: $('#allergies').val()
                        })
                        //can have multiple allergies, so will have to make an array of all of them. this is temp
                        .then(function(res) {
                            console.log("Do something here on success"); //temp
                            vm.recipes = res.data.data;
                        }, function(err) {
                            console.log(err);
                        });
                    });
                }
            });
        });
    }
}());
