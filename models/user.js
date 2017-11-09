// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/config.json");

// Creates a model that matches up with DB
var User = sequelize.define("user", {
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  available_amount: {
    type: Sequelize.INTEGER
  },
  emergency_amount: {
    type: Sequelize.INTEGER
  },
  addin_name: {
    type: Sequelize.STRING
  },
  addin_amount: {
    type: Sequelize.INTEGER
  },
  fav_stock_name: {
    type: Sequelize.STRING
  },
  fav_stock_current_value: {
    type: Sequelize.INTEGER
  },
  body: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
User.sync();


module.exports = User;