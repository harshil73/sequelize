const { Sequelize, DataTypes, Model, Op } = require("sequelize");
let sequelize = require('../database/connection')

let team = require("../models/team")(sequelize, DataTypes, Model);
let player = require("../models/player")(sequelize, DataTypes, Model);

team.hasMany(player, {
    foreignKey: 'teamID'
  });
  player.belongsTo(team, {
    foreignKey: 'teamID'
  });

const adddata = async (req, res) => {
  team
    .create({ teamname: "Dune", noofplayer:5,
        players:{ pname: "Timothee Chalamet", age: 25}},{
          include:player
        }
    )
    .then((data) => {
      console.log(data);
      res.send(data)
    })
    .catch((err) => {
      console.log(err);
    });
};

const readdata = async (req, res) => {
  team
    .findAll({
      include: [player],
    })
    .then((data) => {
      // console.log(data)
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports={adddata,readdata}