const { Sequelize, DataTypes, Model, Op } = require("sequelize");
let sequelize = require('../database/connection')

let employee = require("../models/employee")(sequelize, DataTypes, Model);
let car = require("../models/car")(sequelize, DataTypes, Model);

employee.hasOne(car,{foreignKey:'carId'});
car.belongsTo(employee,{foreignKey:'carId'});

const adddata = async (req, res) => {
  car.create({ car_name: "mercedece" }).then((data) => {
      console.log(data.id);
      employee
        .create({ emp_name: "akshil", carId: data.id })
        .then((data1) => {
        //   console.log(data1);
          res.send(data);
        })
        .catch((err) => {
          console.log(err);
        });

      console.log(data);
    })
    .catch((error) => {
      console.error("Unable to create the table : ", error);
    });
};

const readdata = async (req, res) => {
  let data = await car.findAll();
//   console.log(data);
  res.send(data);
};

module.exports = { adddata, readdata };
