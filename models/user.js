module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-z]+$/i,
        len: [1,30]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z_-]*$/g,
        len: [1,30]
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$",'i'],
        len: [1,20]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,20]
      }
    },
    budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    emergency: {
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

  User.associate = function(models) {
    // Associating User with Expensess
    // When an User is deleted, also delete any associated Expensess
    User.hasMany(models.Income, {
      onDelete: "cascade"
    });
    User.hasMany(models.Expenses, {
      onDelete: "cascade"
    });
  };
  return User;
};
// is: /^[a-zA-Z0-9_.-]*$/g,