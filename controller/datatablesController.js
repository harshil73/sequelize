const { Sequelize, DataTypes, Model, Op } = require("sequelize");
let sequelize = require('../database/connection')

const team = require("../models/team")(sequelize,DataTypes,Model);   
const player = require("../models/player")(sequelize,DataTypes,Model);   

team.hasMany(player, {
  foreignKey: 'teamID'
});
player.belongsTo(team, {
  foreignKey: 'teamID'
});

// console.log(team)

 const data_table = async(req, res) => {
    res.render("alldata");
  };

 const get_data = async (req, res, next) => {
      const draw = req.query.draw;
      const start = req.query.start;
      const length = req.query.length;
      var order = req.query.order;
      const search = req.query.search;
      const searchValue = search.value;
      console.log(searchValue);
      console.log(order);
    
      const recordsTotal = await team.count();
      const recordsFiltered = recordsTotal;
    
      console.log("draw", draw);
      console.log("start", start);
      console.log("length", length);
      console.log("order", order);
      console.log("search", search);
    
      if (order) {
        var column = order[0].column;
        var dir = order[0].dir;
        var colName = req.query.columns[column].data;
        var orderBy = [[colName, dir] ];
      } else {
        var orderBy = ["id"];
      }
    
      const data = await team.findAll({
        offset: parseInt(start),
        limit: parseInt(length),
        order: orderBy,
        subQuery: false,
        where: {
          [Op.or]: {
            teamname: {
              [Op.like]: `${searchValue}%`,
            },
            noofplayer: {
              [Op.like]: `${searchValue}`,
            },
            "$players.pname$": {
              [Op.like]: `${searchValue}%`,
            },
            "$players.age$": {
              [Op.like]: `${searchValue}%`,
            },
          },
        },
        include: [player],
      });
    
      res.json({
        draw: parseInt(draw),
        data: data,
        recordsTotal: recordsTotal,
        recordsFiltered: recordsFiltered,
      });
    };

    module.exports = {data_table,get_data}