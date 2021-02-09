module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Midwives', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      midwifeName: {
        type: Sequelize.STRING
      },
      midwifeAge: {
        type: Sequelize.INTEGER
      },
      midwifeDob: {
        type: Sequelize.DATE,
      },
      midwifeGender: {
        type: Sequelize.ENUM,
        values : ['Male','Female']
      },
      midwifeTelp: {
        type: Sequelize.STRING
      },
      midwifeAddress: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Midwives');
  }
};