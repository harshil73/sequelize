'use strict';
const {
  Model
} = require('sequelize');
const player = require('./player');
module.exports = (sequelize, DataTypes) => {
  class team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      team.hasMany(models.player, {
        foreignKey: 'teamID'
      });
    }
  }
  team.init({
    teamname: DataTypes.STRING,
    noofplayer: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'team',
  });
  return team;
};