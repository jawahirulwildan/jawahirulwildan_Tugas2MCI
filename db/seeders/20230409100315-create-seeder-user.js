'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        u_name: 'Firmansyah Dalima',
        u_email: 'firmansyah.dalima@haryanti.com',
        u_phone_number: '081652225552',
        u_domicile: 'Semarang',
        u_information: 'teman',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Emin Setiawan',
        u_email: 'srajasa@waskita.my.id',
        u_phone_number: '083605213808',
        u_domicile: 'Jakarta',
        u_information: 'sosial media',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Koko Santoso',
        u_email: 'santoso.koko@gmail.com',
        u_phone_number: '081161747615',
        u_domicile: 'surabaya',
        u_information: 'sosial media',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Jagapati Sihotang',
        u_email: 'jati62@prasetyo.org',
        u_phone_number: '088242039109',
        u_domicile: 'surabaya',
        u_information: 'teman',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Aswani Winarno',
        u_email: 'aswani.winarno@sirait.id',
        u_phone_number: '087949941045',
        u_domicile: 'jakarta',
        u_information: 'sahabat',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Bakianto Astuti',
        u_email: 'astuti.bakianto@handayani.net',
        u_phone_number: '087289269243',
        u_domicile: 'medan',
        u_information: 'guru/dosen',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Koko Simanjuntak',
        u_email: 'ksimanjuntak@yahoo.co.id',
        u_phone_number: '083464873474',
        u_domicile: 'medan',
        u_information: 'sosial media',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Harto Najmudin',
        u_email: 'ojailani@gmail.com',
        u_phone_number: '088596442803',
        u_domicile: 'bandung',
        u_information: 'sosial media',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Johan',
        u_email: 'johan72@gmail.co.id',
        u_phone_number: '085754282059',
        u_domicile: 'palembang',
        u_information: 'sosial media',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Mulyanto',
        u_email: 'mulyanto50@gmail.co.id',
        u_phone_number: '088108517458',
        u_domicile: 'denpasar',
        u_information: 'teman',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Wibowo Kalim',
        u_email: 'wibowo.kalim@yahoo.com',
        u_phone_number: '087030959991',
        u_domicile: 'Yogyakarta',
        u_information: 'teman',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Jailani Suwarno',
        u_email: 'qjailani@suwarno.asia',
        u_phone_number: '083513843421',
        u_domicile: 'tangerang',
        u_information: 'teman',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Pradipta Baktiono',
        u_email: 'pradipta.baktiono@yahoo.co.id',
        u_phone_number: '081110247484',
        u_domicile: 'bekasi',
        u_information: 'teman',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Jono Usada',
        u_email: 'usada.jono@gmail.co.id',
        u_phone_number: '081558397362',
        u_domicile: 'padang',
        u_information: 'sosial media',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Firmansyah Adiarja',
        u_email: 'adiarja.firmansyah@yahoo.com',
        u_phone_number: '085581267241',
        u_domicile: 'solo',
        u_information: 'guru/dosen',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Yolanda Baktiono',
        u_email: 'baktianto.yolanda@yahoo.com',
        u_phone_number: '087929388055',
        u_domicile: 'solo',
        u_information: 'guru/dosen',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Anggriawan Waskita',
        u_email: 'lwaskita@anggriawan.info',
        u_phone_number: '082079599663',
        u_domicile: 'Yogyakarta',
        u_information: 'guru/dosen',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Jardianto',
        u_email: 'jardianto@gmail.co.id',
        u_phone_number: '085735843711',
        u_domicile: 'bandung',
        u_information: 'sahabat',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Widodo',
        u_email: 'iwidodo@gmail.co.id',
        u_phone_number: '085922277319',
        u_domicile: 'palembang',
        u_information: 'sahabat',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Gading',
        u_email: 'gading45@gmail.co.id',
        u_phone_number: '087408378699',
        u_domicile: 'denpasar',
        u_information: 'sahabat',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Lasmanto Wibisono',
        u_email: 'lasmanto.wibisono@pudjiastuti.biz.id',
        u_phone_number: '081635371676',
        u_domicile: 'tangerang',
        u_information: 'sahabat',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Paiman Setiawan',
        u_email: 'paiman.setiawan@safitri.ac.id',
        u_phone_number: '081928364880',
        u_domicile: 'pekanbaru',
        u_information: 'sahabat',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Irsad Palastri',
        u_email: 'irsad.palastri@gmail.com',
        u_phone_number: '081317532695',
        u_domicile: 'jakarta',
        u_information: 'pacar',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Prakasa Wani',
        u_email: 'prakasa.wani@gmail.com',
        u_phone_number: '082176886077',
        u_domicile: 'banyuwangi',
        u_information: 'sosial media',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        u_name: 'Hakim Asmuni',
        u_email: 'asmuni.hakim@mardhiyah.or.id',
        u_phone_number: '088602589448',
        u_domicile: 'jember',
        u_information: 'sosial media',
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
