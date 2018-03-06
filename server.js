// Dependencies
// =============================================================
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ 
    defaultLayout: "main" 
  })
);
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Import routes and give the server access to them.
require("./controllers/burgerController.js")(app);

app.listen(PORT, function() {
    console.log("I\'m listening... on port " + PORT);
})