

const { Sequelize, DataTypes, Model } = require("sequelize");

const express = require('express');
const app = express();
const port = 6666

const sequelize = new Sequelize("sequelize_test", "root", "root", {
  host: "127.0.0.1",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connection established sucessfully!");
  })
  .catch((err) => {
    console.log(err);
  });



const film = require("./models/film")(sequelize, DataTypes, Model);
const actor = require("./models/actor")(sequelize, DataTypes, Model);

actor.belongsToMany(film, {through: "film_actors" },
//   {
//     underscored: true,
//   }
);
film.belongsToMany(actor, { through: "film_actors" });

// console.log(film)
// console.log(actor);


// ADDING THE DATA
// using ayanc/await
// async function adddata(){
//     const actors = await actor.create({
//         name: "Brad Pitt",
//         films: [{
//         name: "Fight Club",
//         }]
//       }, {
//         include: film
//       })
//       let data = await actors;
//       console.log(data)
// }

// adddata()



// using then and catch
actor
  .create(
    {
      name: "ryan gosling, emma stone",
      films: [{ name: "la la land" }],
    },
    {
      include: film,
    }
  )
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });



// DELETING THE DATA
// actor.destroy({
//     where:{
//         id:31
//     }
// },{
//     include: film,
//   }).then((data)=>{
//     console.log(data)
//   }).catch((err)=>{
//     console.log(err)
//   });



//  READING THE DATA
  actor.findAll({
    include:film
}).then((data)=>{
    console.log(data)
    res.send(read)
}).catch((err)=>{
    console.log(err)
})


app.listen((port),()=>{
  console.log(`server running on port ${port}`)
})



