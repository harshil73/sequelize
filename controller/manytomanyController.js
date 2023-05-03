
const { Sequelize, DataTypes, Model, Op } = require("sequelize");
let sequelize = require('../database/connection')
const film = require("../models/film")(sequelize, DataTypes, Model);
const actor = require("../models/actor")(sequelize, DataTypes, Model);

actor.belongsToMany(
  film,
  { through: "film_actors" }
  //   {
  //     underscored: true,
  //   }
);
film.belongsToMany(actor, { through: "film_actors" });

// ADDING THE DATA
// using ayanc/await
//     const adddata = async(req,res)=>{
//     const actors = await actor.create({
//         name: "Irrfan Khan",
//         films: [{
//         name: "karwaan",
//         }]
//       }, {
//         include: film
//       })
//       let data = await actors;
//       console.log(data)
//       res.send(data)
// }



// using then and catch
const adddata = async(req,res)=>{
actor
  .create(
    {
      name: "Chris Evans, Ana d Armas",
      films: [{ name: "Ghosted" }],
    },
    {
      include: film,
    }
  )
  .then((data) => {
    console.log(data);
    res.send(data)
  })
  .catch((err) => {
    console.log(err);
  });
}

// DELETING THE DATA
const deletedata = async(req, res) => {
actor.destroy({
    where:{
        id:31
    }
},{
    include: film,
  }).then((data)=>{
    console.log(data)
    res.send(data)
  }).catch((err)=>{
    console.log(err)
  });
}

//  READING THE DATA
const readdata = async(req, res) => {
  actor
    .findAll({
      include: film,
    })
    .then((data) => {
    //   console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {adddata,readdata,deletedata}