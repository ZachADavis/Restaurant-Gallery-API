'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Restaurant) {
      // band
      Comment.belongsTo(Restaurant, {
        foreignKey: "restaurant_id",
        as: "restaurants"
      })
    }
  }
  Comment.init({
    comment_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    restaurant_id: DataTypes.STRING,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};