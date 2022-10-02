'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      restaurant_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rating: {
        type: Sequelize.STRING,
        allowNull: true
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Restaurants');
  }
};