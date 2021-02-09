module.exports = (sequelize, DataTypes) => {
  const Midwife = sequelize.define('Midwife', {
    midwifeName : {
      type:DataTypes.STRING,
      allowNull : false,
      validate: {
        notNull : {
          message : "Please enter your name"
        }
      }
    }, 
    midwifeAge:{
      type: DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull:{
          message : "Please enter your age"
        }
      }
    },
    midwifeDob: {
      type : DataTypes.DATE,
      allowNull : false,
      validate :{
        notNull : {
          message : "Please enter your brithday"
        }
      }
    },
    midwifeGender: {
      type : DataTypes.ENUM,
      allowNull : false,
      values : ['Male','Female']
    },
    midwifeTelp: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull:{
          message : "Please enter your phone number"
        }
      }
    },
    midwifeAddress:{
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull :{
          message : "Please enter your address"
        }
      }
    }
  }, {});
  Midwife.associate = function(models) {
    Midwife.hasMany(models.User,{
      foreignKey : 'midwifeId'
    })
  };
  return Midwife;
};