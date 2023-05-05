'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      car.belongsTo(models.employee,{foreignKey:'carId'})
    }
  }
  car.init({
    car_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'car',
  });
  return car;
};