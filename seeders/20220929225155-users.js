'use strict';
const users = require("../controllers")

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      user_id: `${users}`,
      user_name: `${users}`,
      user_password: `${users}`,
      user_email: `${users}`
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
