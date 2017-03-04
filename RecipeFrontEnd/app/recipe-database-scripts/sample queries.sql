/* Grabs all diets */
SELECT diet FROM diets;

/* Grabs all ingredients */
SELECT ingredient FROM ingredients;

/* Grabs all recipes' names and serving sizes */
SELECT meal_title, num_servings FROM recipes;

/* Grabs all recipes where meal category is dinner */
SELECT * FROM recipes 
INNER JOIN mealcategories
ON recipes.meal_category_id = mealcategories.id
WHERE mealcategories.category = 'dinner';

/* Grabs all recipes where there are egg allergies */
SELECT * FROM recipes
WHERE id IN
(SELECT recipe_id 
FROM allergens_recipes
INNER JOIN allergens
ON allergens.id = allergens_recipes.allergen_id
WHERE allergens.allergen = 'eggs');

/* Grabs all recipes where there are no allergies */
SELECT * FROM recipes
WHERE id NOT IN
(SELECT recipe_id 
FROM allergens_recipes
INNER JOIN allergens
ON allergens.id = allergens_recipes.allergen_id);

/* Grabs all recipes with tomatoes, onion, and cheese */
SELECT * FROM recipes
WHERE id IN
(SELECT recipe_id
FROM ingredients_recipes
INNER JOIN ingredients
ON ingredients.id = ingredients_recipes.ingredient_id
WHERE ingredients.ingredient IN ('tomatoes','onion','cheese'));