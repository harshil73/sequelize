const { Sequelize, DataTypes, Model } = require("sequelize");
const express = require('express');
const app = express();
const port = 6565
const sequelize = new Sequelize("sequelize_test", "root", "root", {
    host: "127.0.0.1",
    dialect: "mysql",
  });

  sequelize
  .authenticate()
  .then(() => {
    console.log("Connection  successfull!!!!!!1");
  })
  .catch((error) => {
    console.error("connection failed suck-cessfully! ", error);
  });

  const team = require('./models/team')(sequelize,DataTypes,Model)
  const player = require('./models/player')(sequelize,DataTypes,Model)

  team.hasMany(player, {
    foreignKey: 'teamID'
  });
  player.belongsTo(team, {
    foreignKey: 'teamID'
  });

  // console.log(team)
  // console.log(player)


  app.get('/adddata',(req,res)=>{
         team.create({teamname:'al nasser',noofplayer:7}).then((data)=>{
            console.log(data)
            if(data && data.id){
                player.create({pname:'ronaldo',age:37,teamID:data.id}).then((data1)=>{
                    console.log(data1)
                    res.send(data1)
                }).catch((err)=>{
                    console.log(err)
                })
            }
         }).catch((err)=>{
            console.log(err)
         })
  })


app.get('/readdata',(req,res)=>{
team.findAll({
    include:[player]
}).then((data)=>{
    // console.log(data)
    res.send(data)
}).catch((err)=>{
    console.log(err)
})
})

  app.listen((port),()=>{
    console.log(`server is running on port ${port}`)
  })
