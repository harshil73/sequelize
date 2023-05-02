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

sequelize.sync().then(()=>{
    console.log('mobile database created!')
  }).catch((err)=>{
    console.log(err)
  })

const Mobile = sequelize.define(
    "mobile",
    {
      modelName: Sequelize.STRING,
      price: Sequelize.INTEGER,
    },
    { timestamps: false }
  );



  
  Mobile.bulkCreate([{modelName:'realMe',price:44560},{modelName:'nokia',price:15000}])


//   Mobile.afterBulkCreate(async (mobile, options) => {
//     console.log('new mobile models added!');
//    for(i=0;i<mobile.length;i++){
//     console.log(mobile[i].modelName)
//     console.log(mobile[i].price)
//     console.log(`-------`)
//    }
//   });



