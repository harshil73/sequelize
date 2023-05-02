const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./connection");
const port = 5000
const express = require("express");
const app = express();

let employee = require('./models/employee')(sequelize,DataTypes,Model)
let car = require('./models/car')(sequelize,DataTypes,Model)


employee.hasOne(car,{foreignKey:'carId'});
car.belongsTo(employee,{foreignKey:'carId'})


  app.get('/adddata',(req,res)=>{
  car.create({car_name:'mercedece'}).then((data) => {
    console.log(data.id)
          employee.create({ emp_name: "akshil", carId: data.id })
            .then((data1) => {
              console.log(data1)
              res.send(data)
            })
            .catch((err) => {
              console.log(err);
            });
        
        console.log(data)
      })
      .catch((error) => {
        console.error("Unable to create the table : ", error);
      });
  })

app.get('/readdata',async(req,res)=>{
      let data = await car.findAll();
      console.log(data)
      res.send(data)
})
  

  
app.listen(port, () => {
  console.log(`server is running on port no. ${port}`);
});

