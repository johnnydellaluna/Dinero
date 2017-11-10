module.exports = function(sequelize, DataTypes) {

// Creates a model that matches up with DB
var User = sequelize.define("user", {
  first_name: {
    type: DataTypes.STRING
  },
  last_name: {
    type: DataTypes.STRING
  },
  username: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  available_amount: {
    type: DataTypes.INTEGER
  },
  emergency_amount: {
    type: DataTypes.INTEGER
  },
  addin_name: {
    type: DataTypes.STRING
  },
  addin_amount: {
    type: DataTypes.INTEGER
  },
  fav_stock_name: {
    type: DataTypes.STRING
  },
  fav_stock_current_value: {
    type: DataTypes.INTEGER
  }
},{
    timestamps: false
});

return User

};