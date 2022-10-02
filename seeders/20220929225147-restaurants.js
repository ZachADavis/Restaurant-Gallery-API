'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('restaurants', [{
      restaurant_name: "Italian Restaurant 1",
      rating: "5",
      comment: ""
    },
    {
      restaurant_name: "Italian Restaurant 2",
      rating: "4.5",
      comment: ""
    },
    {
      restaurant_name: "Italian Restaurant 3",
      rating: "4",
      comment: ""
    },
    {
      restaurant_name: "Italian Restaurant 4",
      rating: "3.5",
      comment: ""
    },
    {
      restaurant_name: "Italian Restaurant 5",
      rating: "3",
      comment: ""
    },
    {
      restaurant_name: "Italian Restaurant 6",
      rating: "2.5",
      comment: ""
    },
    {
      restaurant_name: "Italian Restaurant 7",
      rating: "2",
      comment: ""
    },
    {
      restaurant_name: "Italian Restaurant 8",
      rating: "1.5",
      comment: ""
    },
    {
      restaurant_name: "Italian Restaurant 9",
      rating: "1",
      comment: ""
    },
    {
      restaurant_name: "Italian Restaurant 10",
      rating: "0",
      comment: ""
    }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('restaurants', null, {})
  }
};
