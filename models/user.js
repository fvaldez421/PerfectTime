
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    googleId: DataTypes.STRING  
  });

  return User;
}