var User = require("../models/user.js");

var Expenses = require("..models/expenses.js")

module.exports = (app, db) => {

// Finds and displays user info. HOW DO WE DO THIS?
  app.get('/users', function(req, res) => {
    db.user.findAll()
      .then(user => {
        res.json(user);
      });
  });

  // Finds all cards for the user and displays spent_amount

  app.get("/cards", (req, res) => {
  	db.expenses.findAll({
  		req.body.card_name
  	}).then(expenses => {
  		res.json(req.body.card_name, req.body.spent_amount)
  	})
  });

  // Finds all categories for the user and displays with spent_amount

  app.get("/categories", (req, res) => {
  	db.expenses.findAll({
  		req.body.category_name
  	}).then(expenses => {
  		res.json(req.body.category_name, req.body.spent_amount)
  	})
  });

  app.delete('/expenses/:card_name', (req, res) => {
    const card_name = req.body.card_name;
    db.owners.destroy({
      where: { card_name: card_name }
    })

    // What goes next?
      .then(deletedOwner => {
        res.json(deletedOwner);
      });
  });

