module.exports = function(sequelize, DataTypes) {

// Creates a model that matches up with DB
var Expenses = sequelize.define("expenses", {
  card_name: {
    type: DataTypes.STRING
  },
  category_name: {
    type: DataTypes.STRING
  },
  spent_amount: {
    type: DataTypes.INTEGER
  },
}, {
    timestamps: false
})

return Expenses
};


