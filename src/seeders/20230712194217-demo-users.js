'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        name: "John Doe",
        email: "johndoe@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jane Smith",
        email: "janesmith@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bob Johnson",
        email: "bobjohnson@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    const usersWithIds = users.map((user, index) => ({
      id: index + 1,
      ...user
    }));

    await queryInterface.bulkInsert('users', usersWithIds, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
