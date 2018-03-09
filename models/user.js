
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		name: DataTypes.STRING,
		googleId: DataTypes.STRING,
		nickName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		age: {
			type: DataTypes.STRING,
			allowNull: true
		},
		height: {
			type: DataTypes.STRING,
			allowNull: true
		},
		weight: {
			type: DataTypes.STRING,
			allowNull: true
		},
		gender: {
			type: DataTypes.STRING,
			allowNull: true
		},
		conception: {
			type: DataTypes.STRING,
			allowNull: true
		}
  }, {
		timestamps: true
	});
	User.associate = function(models) {
		User.hasMany(models.Daily, {
			onDelete: "cascade"
		});
	};
  return User;
}