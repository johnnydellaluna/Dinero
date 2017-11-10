// DEPENDENCIES

var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS APP

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// ROUTES

require("./routes/user-api-routes.js")(app);
require("./routes/expenses-api-routes.js")(app);
require("./routes/html-routes.js")(app);

// SYNC SEQUELIZE AND EXPRESS

var db = require("./models");

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
