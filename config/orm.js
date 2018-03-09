// *********************************************************************************
// File offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("./connection.js");

// ORM
// =============================================================

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(obj) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in obj) {
    var value = obj[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(obj, key)) {
      // if string with spaces, add quotations (Big Mac => 'Big Mac')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // ex: {name: 'The Best Burger'} => ["name='The Best Burger'"]
      // ex: {devoured: true} => ["devoured=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
	selectAll: function(tableInput, cb) {
		let queryString = "SELECT * FROM " + tableInput + ";";

    // Load the SQL
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      // return the resulting data
      cb(result);
    });

	},
	insertOne: function(table, cols, vals, cb) {
		let queryString = "INSERT INTO " + table + " (" + cols + ") VALUES ('"+ vals +"');";

    // Load the SQL
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });

	},
	updateOne: function(table, objColVals, condition, cb) {
    // Using objToSql above turns objColVals into a string; condition is already a string of "key=value"
    let queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition + ";" ;

    // Load the SQL
    connection.query(queryString, [objColVals, condition], function(err, result) {
      if (err) throw err;
      cb(result);
    });
	}
}

// Export the orm object for the model (burger.js).
module.exports = orm;
