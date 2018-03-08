
module.exports = function (sequelize, DataTypes) {
	var Event = sequelize.define("Event", {
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		startDate: {
			type: DataTypes.STRING,
			allowNull: false
		},
		endDate: {
			type: DataTypes.STRING,
			allowNull: false
		},
		invitees: {
			type: DataTypes.STRING,
			allowNull: false
		},
		details: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		timestamps: false
	});

	Event.associate = function(models) {
		Event.belongsTo(models.Member, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Event;
};