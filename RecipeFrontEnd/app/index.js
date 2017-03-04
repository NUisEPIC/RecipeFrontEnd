// Storing the package content into pg variable
var pg = require('pg');
require('./env.js');

var config = {
  user: process.env.POSTGRES_USER, //env var: PGUSER 
  database: 'recipedb', //env var: PGDATABASE 
  password: process.env.POSTGRES_PASSWORD, //env var: PGPASSWORD 
  host: '127.0.0.1', // Server hosting the postgres database 
  port: process.env.POSTGRES_PORT, //env var: PGPORT 
  max: 10, // max number of clients in the pool 
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed 
};

var conString = "pg://postgres:postgres@127.0.0.1:5432/recipedb"

var client  = new pg.Client(conString);

client.connect(function (err) {
  if (err) {throw err};
});

function search(foodName) {
  // Select from column 'ingredients' from table 'recipes' where
  //var q = 'WHERE ' + foodName + 'IN (SELECT ingredients FROM recipes)';
  // Select all From table 'recipes' WHERE column 'ingredients' are LIKE foodName (%foodName% means you can find string within words)
  var alteratequery = 'SELECT * FROM recipes WHERE ingredients LIKE ' + '%' + foodName + '%';
  
   // execute a query on our database 
  client.query(alternatequery, ['brianc'], function (err, result) {
    if (err) {throw err};
 
    // just print the result to the console 
    console.log(result.rows[0]); // outputs: { name: 'brianc' } 
});
              
               
// disconnect the client 
client.end(function (err) {
      if (err) {throw err};
});

}
