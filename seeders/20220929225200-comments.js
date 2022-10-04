'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comments', [{
      user_id: "1",
      restaurant_name: "1",
      comment: "Great food!"
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {})
  }
};
