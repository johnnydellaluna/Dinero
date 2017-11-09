// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a model that matches up with DB
var Expenses = sequelize.define("expenses", {
  id: {
    type: Sequelize.INTEGER
  },
  card_name: {
    type: Sequelize.STRING
  },
  category_name: {
    type: Sequelize.STRING
  },
  spent_amount: {
    type: Sequelize.INTEGER
  },
  body: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
Expenses.sync();


module.exports = Expenses;