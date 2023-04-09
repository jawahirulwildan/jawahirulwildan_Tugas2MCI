'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      b_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      b_quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      b_total: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      b_status: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      user_u_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      seminar_ss_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'seminars',
          key: 'id'
        }
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
    await queryInterface.dropTable('bookings');
  }
};