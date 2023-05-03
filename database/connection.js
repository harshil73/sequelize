const { Sequelize, DataTypes, Model, Op } = require("sequelize");
const sequelize = new Sequelize("sequelize_test", "root", "root", {
  host: "127.0.0.1",
  dialect: "mysql",
});

module.exports=sequelize;