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
    .create({ teamname: "the curious case of benjamine button", noofplayer:7,
        players:{ pname: "Brad Pitt", age: 44}},{
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


const updatedata = async (req,res)=>{
  team.update({teamname: "Europhia", noofplayer:4, players:{ pname: "Zendaya", age: 27}},{
    include:player
  },{
    where:{id:40}
  })
}

module.exports={adddata,readdata,updatedata}