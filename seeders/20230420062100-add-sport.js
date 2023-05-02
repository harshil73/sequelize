"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sports",
      [
        {
          sportName: "Cricket",
          noOfPlayers: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sportName: "Kabaddi",
          noOfPlayers: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sportName: "Football",
          noOfPlayers: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sports', null, {});
  },
};
