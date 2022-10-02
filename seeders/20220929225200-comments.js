'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comments', [{
      comment_id: "1",
      user_name: "user1",
      restaurant_name: "Italian Restaurant 1",
      comment: "Great food!"
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {})
  }
};
