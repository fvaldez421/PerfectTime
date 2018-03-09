
module.exports = function(sequelize, DataTypes) {
	var General = sequelize.define("General", {
		fdLastPeriod: {
			type: DataTypes.STRING,
			allowNull: false
			
		},
		cycleLength: {
			type: DataTypes.STRING,
			allowNull: false
		}
		
	}, {
		timestamps: false
	});

	General.associate = function(models) {
		General.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return General;
};