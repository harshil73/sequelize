const { Sequelize, DataTypes, Model, Op } = require("sequelize");
const sequelize = require("../database/connection");
const employee = require("../models/employee")(sequelize, DataTypes, Model);
const car = require("../models/car")(sequelize, DataTypes, Model);

const car_create_query = async () => {
  // console.log(data);
  let curr= await car.create(
    {
      car_name: "BMW",
      employees: {
        emp_name: "HARSHIL"
      },
    },
    {
      include:[employee]
    }
  );

  return curr
};


module.exports = { car_create_query };
