module.exports = function(sequelize, DataTypes) {
  var Expenses = sequelize.define("Expenses", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$",'i'],
        len: [1,30]
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$",'i'],
        len: [1,30]
      }
    },
    amount_due: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    due_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  Expenses.associate = function(models) {
    // We're saying that a Expenses should belong to an Author
    // A Expenses can't be created without an Author due to the foreign key constraint
    Expenses.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Expenses;
};