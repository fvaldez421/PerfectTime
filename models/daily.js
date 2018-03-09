
module.exports = function(sequelize, DataTypes) {
	var Daily = sequelize.define("Daily", {
		date: {
			type: DataTypes.STRING,
			allowNull: false

		},
		bbt: {
			type: DataTypes.STRING,
			allowNull: true
		},
		mood: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		energy: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		symptoms: {
			type: DataTypes.STRING,
			allowNull: true
		},
		cervMuc: {
			type: DataTypes.STRING,
			allowNull: true
		},
		intercourse: {
			type: DataTypes.STRING,
			allowNull: true
		},
		conceptMeth: {
			type: DataTypes.STRING,
			allowNull: true
		},
		meds: {
			type: DataTypes.STRING,
			allowNull: true
		},
		supplements: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		timestamps: false
	});

	// Daily.associate = function(models) {
	// 	Daily.belongsTo(models.User, {
	// 		foreignKey: {
	// 			allowNull: false
	// 		}
	// 	});
	// };

	return Daily;
};