'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
       name: 'Thomas Shelby',
       email:'thomasshelby73@gmail.com',
       createdAt: new Date(),
       updatedAt: new Date(),
     },{
      name: 'Patrick Bateman',
      email:'pbatman27@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
