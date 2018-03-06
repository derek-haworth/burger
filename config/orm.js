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

var tableName = "burgers";

var orm = {
	selectAll: function() {
		
	},
	insertOne: function() {
		
	},
	updateOne: function() {
	}
}

module.exports = orm;
