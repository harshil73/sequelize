"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class film_actors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  film_actors.init(
    {
      filmId: DataTypes.INTEGER,
      actorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "film_actors",
    }
  );
  return film_actors;
};
