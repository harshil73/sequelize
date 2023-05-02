'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class video1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      video1.belongsToMany(models.taggable, {
        foreignKey: 'taggableId',
        constraints: false,
        scope: {
          taggableType: 'video'
        }
      })
    }
  }
  video1.init({
    title: DataTypes.STRING,
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'video1',
  });
  return video1;
};