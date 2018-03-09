
module.exports = function(sequelize, DataTypes) {
	var Daily = sequelize.define("Daily", {
		date: {
			type: DataTypes.STRING,
			allowNull: false

		},
		bbt: {
			type: DataTypes.DECIMAL(6,3),
			allowNull: false
		},
		mood: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		energy: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		symptoms: {
			type: DataTypes.STRING,
			allowNull: false
		},
		cervMuc: {
			type: DataTypes.STRING,
			allowNull: false
		},
		intercourse: {
			type: DataTypes.STRING,
			allowNull: false
		},
		conceptMeth: {
			type: DataTypes.STRING,
			allowNull: false
		},
		meds: {
			type: DataTypes.STRING,
			allowNull: false
		},
		supplements: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		timestamps: false
	});

	Daily.associate = function(models) {
		Daily.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Daily;
};