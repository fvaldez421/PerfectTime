
module.exports = function(sequelize, DataTypes) {
	var Detail = sequelize.define("Detail", {
		bbt: {
			type: DataTypes.DECIMAL(3,4),
			allowNull: false
		},
		mood1: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		mood2: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		mood3: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		energy: {
			type: DataTypes.STRING,
			allowNull: false
		},
		meds: {
			type: DataTypes.STRING,
			allowNull: false
		},
		vits: {
			type: DataTypes.STRING,
			allowNull: false
		},
		flow: {
			type: DataTypes.STRING,
			allowNull: false
		},
		cervMuc: {
			type: DataTypes.STRING,
			allowNull: false
		},
		discharge: {
			type: DataTypes.STRING,
			allowNull: false
		},
		appetite: {
			type: DataTypes.STRING,
			allowNull: false
		},
		nausea: {
			type: DataTypes.STRING,
			allowNull: false
		},
		tender: {
			type: DataTypes.STRING,
			allowNull: false
		},
		cramping: {
			type: DataTypes.STRING,
			allowNull: false
		},
		menstart: {
			type: DataTypes.STRING,
			allowNull: false
		},
		hunger: {
			type: DataTypes.STRING,
			allowNull: false
		},
		events: {
			type: DataTypes.STRING,
			allowNull: true
		}
	});

	Detail.associate = function(models) {
		Detail.belongsTo(models.Member, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Detail;
}