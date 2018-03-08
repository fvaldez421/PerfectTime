
module.exports = function (sequelize, DataTypes) {
	var Member = sequelize.define("Member", {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		age: {
			type: DataTypes.STRING,
			allowNull: false
		},
		height: {
			type: DataTypes.STRING,
			allowNull: false
		},
		weight: {
			type: DataTypes.STRING,
			allowNull: false
		},
		gender: {
			type: DataTypes.STRING,
			allowNull: false
		},
		conception: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		timestamps: false
	});
	Member.associate = function(models) {
		Member.hasMany(models.Daily, {
			onDelete: "cascade"
		});
	};

	return Member;
};