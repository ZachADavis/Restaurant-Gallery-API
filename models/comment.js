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
    static associate(Restaurant, User) {
      // Restauarant
      Comment.belongsTo(Restaurant, {
        foreignKey: "restaurant_id",
        as: "restaurant"
      })

      // user name
      Comment.belongsTo(User, {
        foreignKey: "user_id",
        as: "user"
      })

    }
  }
  Comment.init({
    comment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments',
    timestamps: false
  });
  return Comment;
};