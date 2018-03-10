# Burger
A burger logger with `MySQL`, `Node`, `Express`, `Handlebars` and a homemade `ORM`. It follows the MVC design pattern; uses Node and MySQL to query and route data, and Handlebars to generate HTML. It's kind of like a To-Do App but for burgers.

### How does it work?
This full stack `Node` app uses a basic `MySQL` database, `Express` for the server, and `Handlebars` as its template engine. It is currently deployed on Heroku. GET, POST, and PUT calls are handled with a custom-written ORM, which is linked by a controller & referenced by the correct model using MVC techniques. Updates are made by Ajax calls to the specified POST and PUT routes.

## How can I use the app?
`Node` is required to run this app. Deployment on a node server is required. This app is setup to listen on a Heroku default port; in the absence of Heroku, it sets the port to 8080 instead. After downloading the repository, run `npm install` from the command line to ensure you have the necessary packages included in the package.json file.

You will also need to setup a MySQL database on your local and update `config/connection.js` to include your localhost information. Then use the following code in `db/schema.sql` to set up your database and `db/seeds.sql` to add in some starting data. 

If you don't want to do all that then you can visit the [Live Demo](https://haworth-burger-app.herokuapp.com/)


### Notes
* Experimented with single line conditional statements
* Started using some ES6 features - let
