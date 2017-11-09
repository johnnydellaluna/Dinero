module.exports = function(sequelize, DataTypes) {
	var Expenses = sequelize.define("Expenses", {
		card_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				is: ["^[a-z]+$",'i'],
				len: [1,30]
			}
		},
		catagory_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				is: ["^[a-z]+$",'i'],
				len: [1,30]
			}
		},
		spent_amount: {
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
	return Expenses;
};