'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('seminars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sm_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      sm_title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sm_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(8,2)
      },
      sm_venue: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sm_total_seat: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('seminars');
  }
};