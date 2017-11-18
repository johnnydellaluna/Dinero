// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Models
var db = require("./models");

// Data Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static Directory
app.use(express.static("public"));

// Routes
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/expenses-api-routes.js")(app);
require("./routes/income-api-routes.js")(app);

// Syncing
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});