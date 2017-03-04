

(function() {
    angular
        .module('app')
        .controller('RecipeController', RecipeController)

        
    function customSplit(input) {
        return input.substring(3).split(/, [0-9]\./); // KLUDGE
    }

    function RecipeController() {
        var vm = this;
        vm.customSplit = customSplit;
        vm.recipes = [{
            id: 1,
            meal_title: "Tomato Scrambled Eggs ",
            meal_category_id: 1,
            num_servings: 2,
            price_total: "$3.60",
            ingredients: "1/2 tbsp butter, 4 cups fresh tomatoes or 2 cups canned tomatoes (chopped), 4 eggs, salt and pepper",
            instructions: " 1. Put a small pan on medium heat and melt the butter, then swirl it around to coat the pan. Add the tomatoes. Cook until the tomatoes release their juice and most of the juice evaporates, about 5 to 7 minutes., 2. Meanwhile, crack the eggs into a bowl and add a generous sprinkling of salt and pepper. Beat the eggs lightly with a fork., 3. Once most of the juice has cooked out of the tomatoes, turn the heat down to low and add the eggs to the pan. Using a spatula, gently mix the eggs and tomatoes. Carefully stir the eggs to keep them from forming chunks. Turn down the heat as low as possible; the slower your eggs cook, the creamier they’ll be., 4. Once the eggs are done, turn off the heat and add any chopped herbs you have around. Basil is the best with tomatoes., 5. If you have some around, serve over toast or a tortilla."
          }];
    }
}());
