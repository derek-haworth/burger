// Dependencies
// =============================================================
var express = require('express');
var exphbs = require('express-handlebars');;

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ 
    defaultLayout: "main" 
  })
);
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fafruhUbes0a",
  database: "snippet"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.listen(PORT, function() {
    console.log("I\'m listening... on port " + PORT);
})