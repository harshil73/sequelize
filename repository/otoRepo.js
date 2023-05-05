const { Sequelize, DataTypes, Model, Op } = require("sequelize");
let sequelize = require("../database/connection");
let employee = require("../models/employee")(sequelize, DataTypes, Model);
let car = require("../models/car")(sequelize, DataTypes, Model);

// employee.hasOne({foreignKey:'carId'})
// car.belongsTo({foreignKey:'carId'})

const car_create_query = (data) => {
  console.log(data)
  return car.create(data);
};

const employee_create_query = (id) => {
  console.log(id)
  return employee.create({emp_name: "Akshil Tejani",carId:id});
};

const read_query =()=>{
  return car.findAll()
}

module.exports = { car_create_query,employee_create_query,read_query};
