'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Restaurants', {
      restaurant_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      restaurant_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rating: {
        type: Sequelize.STRING,
        allowNull: true
      },
      restaurant_image: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Restaurants');
  }
};