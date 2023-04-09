'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      u_name: {
        allowNull: false,
        type: Sequelize.STRING(60)
      },
      u_email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      u_phone_number: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      u_domicile: {
        allowNull: false,
        type: Sequelize.STRING
      },
      u_information: {
        allowNull: false,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};