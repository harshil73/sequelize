const express = require('express')
const app = express();

const { Sequelize, DataTypes,Model } = require("sequelize");
const sequelize = new Sequelize(
  'sequelize_test',
  'root',
  'root',
  {
      host:'127.0.0.1',
      dialect:'mysql'
  }
)

sequelize.authenticate().then(()=>{
  console.log('connection established sucessfully!')
}).catch((err)=>{
  console.log(err)
})

// const user_data = require('./models/users')(sequelize, DataTypes, Model)
const film = require("./models/film")(sequelize, DataTypes, Model);
const actor = require("./models/actor")(sequelize, DataTypes, Model);


actor.belongsToMany(film, {through: "film_actors" },
);
film.belongsToMany(actor, { through: "film_actors" });
// console.log(User)

// LAZY LOADING
// app.get('/',async(req,res)=>{
//     let data = await user_data.findAll()
//     // console.log(data)
//     res.status(200).send(data)
// })


// EAGER LOADING
// app.get('/',async(req,res)=>{
//     let data = await film.findOne({
//         include:[{
//             // required:true,
//             model:actor
//         }],
//         where:{
//           id:17
//         }
//     }
//     )
//     let response = {
//         films:data,
//     }
//     res.status(200).send(response)
// })


// SCOPES
film.addScope('filmName',{
    where:{
        name:'boss'
    }
})

app.get('/scope',async(req,res)=>{
let data = await film.scope('filmName').findAll()
// let data = await film.findAll({
//     include:[{
//         model:actor
//     }]
// })
res.status(200).send(data)
})
app.listen((5445),()=>{
    console.log('server started on port no. 5445')
})


