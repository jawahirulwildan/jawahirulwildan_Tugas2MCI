'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('seat_bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seat_s_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'seats',
          key: 'id'
        }
      },
      booking_b_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'bookings',
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
    await queryInterface.dropTable('seat_bookings');
  }
};