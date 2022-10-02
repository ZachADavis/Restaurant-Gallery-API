'use strict';
const users = require("../controllers")

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      user_id: "1",
      user_email: "fake@email.com",
      user_name: "user1",
      password: "password"
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
