'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('seminars', [
      {
        sm_date: '2022-04-10 09:00:00',
        sm_title: 'WEBINAR NASIONAL EKSPEDISI SERIBU PULAU #4',
        sm_price: 0.00,
        sm_venue: 'Zoom Meeting',
        sm_total_seat: 235,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        sm_date: '2022-12-11 08:00:00',
        sm_title: 'WEBINAR KESENIAN DAN KESEHATAN ENDORFIN',
        sm_price: 0.00,
        sm_venue: 'Zoom Meeting',
        sm_total_seat: 101,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        sm_date: '2022-12-03 13:00:00',
        sm_title: 'Devfest Bogor 2022 “Move Together for Further”',
        sm_price: 50000.00,
        sm_venue: 'GD, Poetri Ballroom, Bogor, Kota Bogor',
        sm_total_seat: 221,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        sm_date: '2022-11-19 10:00:00',
        sm_title: 'The Art of Arranging Music',
        sm_price: 60000.00,
        sm_venue: 'Jakarta',
        sm_total_seat: 170,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        sm_date: '2022-11-13 11:00:00',
        sm_title: 'SEMINAR NASIONAL FISIOTERAPI UNIVERSITAS AIRLANGGA 2022',
        sm_price: 35000.00,
        sm_venue: 'Ruang Auditorium Gedung Kuliah Bersama (GKB) Kampus C Universitas Airlangga, Kota Surabaya',
        sm_total_seat: 140,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        sm_date: '2022-10-05 09:00:00',
        sm_title: 'SEMINAR NASIONAL TL EXPO 2022',
        sm_price: 75000.00,
        sm_venue: 'Engineering Hall Dekanat Fakultas Teknik Universitas Diponegoro, Kota Semarang',
        sm_total_seat: 118,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        sm_date: '2022-07-16 10:00:00',
        sm_title: 'TALKSHOW FOURTYFIVE STATION 2022',
        sm_price: 50000.00,
        sm_venue: 'UPN Veteran Jakarta, Kota Depok',
        sm_total_seat: 143,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        sm_date: '2022-03-31 09:00:00',
        sm_title: 'Webinar Nasional Artificial Intelligence',
        sm_price: 0.00,
        sm_venue: 'Zoom Meeting',
        sm_total_seat: 184,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        sm_date: '2022-03-12 10:00:00',
        sm_title: 'Kognisi Youth Learning Festival 2022',
        sm_price: 50000.00,
        sm_venue: 'Virtual Land Kumospace, Kota Adm. Jakarta Barat',
        sm_total_seat: 129,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        sm_date: '2022-02-19 09:00:00',
        sm_title: 'STOP‼️ Sex Talk Out of Prejudice',
        sm_price: 0.00,
        sm_venue: 'Zoom Meeting',
        sm_total_seat: 103,
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
