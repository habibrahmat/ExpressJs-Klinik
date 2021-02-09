module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate :{
        notNull :{
          message : "Please enter your username"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail : true,
        notNull :{
          message : "Please enter your email"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          message:"Please enter your password"
        }
      }
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Role,{
      onDelete : "CASCADE",
      foreignKey : 'roleId'
  });
  User.belongsTo(models.Midwife,{
    onDelete : "CASCADE",
    foreignKey: 'midwifeId'
  })
  };
  return User;
};