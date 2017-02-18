import csv

# Grabs all unique entries in column column_number
def acquire_column_contents(column_number, filename = 'recipeinfo.csv'):
    f = open(filename, 'rb');
    reader = csv.reader(f)
    unique_col_entries = [];
    next(reader);
    for row in reader:
        entries = row[column_number].split(',');
        for entry in entries:
            entry = entry.lower().strip()
            if entry == '':
                continue;
            if not (entry in unique_col_entries):
                # Remove spaces from strings
                # Remove first row in csv file with descriptors of columns
                # Remove capitilzation
                unique_col_entries.append(entry);
    return unique_col_entries;

# Create csv files for recipe requirements

def create_single_column_table(table_name, values):
    f = open(table_name + '.csv', 'wb');
    writer = csv.writer(f, delimiter=',');
    for ind in range(1,len(values) + 1):
        writer.writerow([ind,values[ind - 1]]);

# Create join tables on recipe requirements

def create_join_table(table_name, req_column, req_values, recipe_filename = 'recipeinfo.csv'):
    r = open(recipe_filename, 'rb');
    f = open(table_name + '.csv', 'wb');
    writer = csv.writer(f, delimiter=',');
    reader = csv.reader(r);
    next(reader);
    primary_key = 1;
    recipe_id = 1;
    for row in reader:
        reqs = row[req_column].split(',');
        for req in reqs:
            req = req.lower().strip();
            if req == '':
                continue;
            req_id = req_values.index(req);
            writer.writerow([primary_key, req_id, recipe_id]);
            primary_key = primary_key + 1;
        recipe_id = recipe_id + 1;

# Get meal categories (1)
meal_cats = acquire_column_contents(1);
# Get allergens (4)
allergens = acquire_column_contents(3);
# Get ingredients (10)
ingredients = acquire_column_contents(9);
# Get diets (5)
diets = acquire_column_contents(4);

#print allergens;
#print ingredients;
#print diets;
#print meal_cats

#create_single_column_table('allergens',allergens);
#create_single_column_table('ingredients',ingredients);
#create_single_column_table('mealcategories',meal_cats);
#create_single_column_table('diets',diets);

#create_join_table('allergens_recipes', 4, allergens);
#create_join_table('diets_recipes', 3, diets);
#create_join_table('ingredients_recipes', 9, ingredients);

# Create recipes table from recipeinfo csv:
# Title,Meal Category,Serves:(num),Allergens,Dietary Category,
# $ Total,$ Per Serving,Ingredients,Optional Ingredients,Ing Keys,
# Linked Recipes:,Instructions

def grab_serving_int(serving_text):
    serving_int = ""
    for char in serving_text:
        if char in "0123456789":
            serving_int = serving_int + char;
        else:
            break;
    return serving_int;

r = open('recipes.csv','wb');
r_info = open('recipeinfo.csv','rb');
writer = csv.writer(r, delimiter=',');
reader = csv.reader(r_info);
next(reader);
primary_key = 1;
for row in reader:
    title = row[0]
    serves = grab_serving_int(row[2]);
    meal_cat = meal_cats.index(row[1].lower().strip()) + 1;
    writer.writerow([primary_key,title,meal_cat,serves,row[5],row[7],row[11]]);
    primary_key = primary_key + 1;