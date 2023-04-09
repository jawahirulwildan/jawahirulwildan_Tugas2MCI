'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bookings', [
      {
        b_date: '2022-02-04 09:42:45',
        b_quantity: 5,
        b_total: 0.00,
        b_status: 1,
        user_u_id: 25,
        seminar_ss_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        b_date: '2022-03-18 08:00:10',
        b_quantity: 1,
        b_total: 0.00,
        b_status: 1,
        user_u_id: 22,
        seminar_ss_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        b_date: '2022-04-27 09:03:12',
        b_quantity: 3,
        b_total: 0.00,
        b_status: 1,
        user_u_id: 19,
        seminar_ss_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        b_date: '2022-04-29 11:10:30',
        b_quantity: 4,
        b_total: 0.00,
        b_status: 1,
        user_u_id: 8,
        seminar_ss_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        b_date: '2022-05-08 12:30:00',
        b_quantity: 5,
        b_total: 0.00,
        b_status: 1,
        user_u_id: 18,
        seminar_ss_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        b_date: '2022-05-09 06:45:01',
        b_quantity: 2,
        b_total: 0.00,
        b_status: 1,
        user_u_id: 1,
        seminar_ss_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        b_date: '2022-05-20 19:27:16',
        b_quantity: 3,
        b_total: 150000.00,
        b_status: 1,
        user_u_id: 15,
        seminar_ss_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        b_date: '2022-05-21 15:23:30',
        b_quantity: 4,
        b_total: 0.00,
        b_status: 1,
        user_u_id: 19,
        seminar_ss_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        b_date: '2022-05-27 16:03:50',
        b_quantity: 6,
        b_total: 210000.00,
        b_status: 0,
        user_u_id: 5,
        seminar_ss_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        b_date: '2022-05-29 14:30:40',
        b_quantity: 5,
        b_total: 250000.00,
        b_status: 1,
        user_u_id: 19,
        seminar_ss_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        b_date: '2022-06-09 22:10:00',
        b_quantity: 5,
        b_total: 300000.00,
        b_status: 1,
        user_u_id: 22,
        seminar_ss_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        b_date: '2022-06-30 01:20:10',
        b_quantity: 3,
        b_total: 225000.00,
        b_status: 1,
        user_u_id: 13,
        seminar_ss_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        b_date: '2022-07-17 17:32:20',
        b_quantity: 5,
        b_total: 250000.00,
        b_status: 0,
        user_u_id: 3,
        seminar_ss_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        b_date: '2022-08-12 12:07:20',
        b_quantity: 6,
        b_total: 210000.00,
        b_status: 0,
        user_u_id: 1,
        seminar_ss_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        b_date: '2022-08-20 07:30:20',
        b_quantity: 3,
        b_total: 0.00,
        b_status: 1,
        user_u_id: 17,
        seminar_ss_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        b_date: '2022-09-20 13:45:54',
        b_quantity: 1,
        b_total: 75000.00,
        b_status: 1,
        user_u_id: 3,
        seminar_ss_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        b_date: '2022-09-23 21:54:32',
        b_quantity: 3,
        b_total: 0.00,
        b_status: 0,
        user_u_id: 17,
        seminar_ss_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        },
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
