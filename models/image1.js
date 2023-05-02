'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      image1.belongsToMany(models.taggable, {
        foreignKey: 'taggableId',
        constraints: false,
        scope: {
          taggableType: 'image'
        }
      })
    }
  }
  image1.init({
    title: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'image1',
  });
  return image1;
};