module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      midwifeId:{
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references : {
          model : 'Midwives',
          key : 'id',
          as : 'midwifeId'
        }
      },
      roleId:{
        type : Sequelize.INTEGER,
        onDelete : 'CASCADE',
        references : {
            model : 'Roles',
            key : 'id',
            as : 'roleId'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};