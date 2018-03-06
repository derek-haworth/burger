// *********************************************************************************
// File offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************
/*
* In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`
*/


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
	selectAll: function() {
		
	},
	insertOne: function() {
		
	},
	updateOne: function() {
	}
}

module.exports = orm;
