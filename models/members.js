
module.exports = function (sequelize, DataTypes) {
	var Member = sequelize.define("Member", {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		age: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		height: {
			type: DataTypes.STRING,
			allowNull: false
		},
		weight: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		gender: {
			type: DataTypes.STRING,
			allowNull: false
		},
		acl: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		sexact: {
			type: DataTypes.STRING,
			allowNull: false
		},
		contype: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});
	Member.associate = function(models) {
		Member.hasMany(models.Detail, {
			onDelete: "cascade"
		});
	};

	return Member;
}