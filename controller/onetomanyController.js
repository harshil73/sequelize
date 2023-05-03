const { Sequelize, DataTypes, Model, Op } = require("sequelize");
const sequelize = new Sequelize("sequelize_test", "root", "root", {
  host: "127.0.0.1",
  dialect: "mysql",
});

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
    .create({ teamname: "al nasser", noofplayer: 7 })
    .then((data) => {
      console.log(data);
      // if (data && data.id) {
      //   player
      //     .create({ pname: "ronaldo", age: 37, teamID: data.id })
      //     .then((data1) => {
      //       console.log(data1);
      //       res.send(data1);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // }
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