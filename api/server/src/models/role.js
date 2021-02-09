module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    roleName :{
      type : DataTypes.STRING,
      allowNull: false,
      validate :{
        notNull:{
          message : "Please enter your role name"
        }
      }
    },
    roleCode :{
      type : DataTypes.STRING,
      allowNull : false
    },
    roleAccess :{
      type :DataTypes.ENUM,
      values: ['Admin', 'Bidan'],
      allowNull :false
    }
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
    Role.hasMany(models.User,{
      foreignKey : 'roleId',
  });
  };
  return Role;
};