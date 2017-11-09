module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				is: ["^[a-z]+$",'i'],
				len: [1,30]
			}
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				is: ["^[a-z]+$",'i'],
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
		available_amount: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isNumeric: true
			}
		},
		how_spent: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isNumeric: true
			}
		},
		emergency_amount: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isNumeric: true
			}
		},
		addin_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				is: ["^[a-z]+$",'i'],
				len: [1,50]
			}
		},
		addin_amount: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isNumeric: true
			}
		},
		fav_stock_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				is: ["^[a-z]+$",'i'],
				len: [1,50]
			}
		},
		fav_stock_current_value: {
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
	return User;
};