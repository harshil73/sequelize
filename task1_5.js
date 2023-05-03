const express = require("express");
const app = express();
const port = 5000;
app.set("view engine", "ejs");

const router = require("./routers/datatablesRoutes");

app.use(router)

// const team = require("./models/team")(sequelize, DataTypes, Model);
// const player = require("./models/player")(sequelize, DataTypes, Model);

// team.hasMany(player, {
//   foreignKey: 'teamID'
// });
// player.belongsTo(team, {
//   foreignKey: 'teamID'
// });


// app.get('/alldata',(req,res)=>{
//     team.findAll({
//         include:[player]
//     }).then((data)=>{
//         // console.log(data)
//         // res.render('alldata',{data,datalength:data.length})
//         res.render('showdata',{data,datalength:data.length})
//         // res.send(data)
//     }).catch((err)=>{
//         console.log(err)
//     })
//     })

app.get("/new", (req, res) => {
  res.render("new");
});

app.get("/show_data", async (req, res) => {
  let data = await player.findAll();
  res.json({data:data});
});

app.listen(port, () => {
  console.log(`server is running on port no. ${port}`);
});
