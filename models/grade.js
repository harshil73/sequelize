const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../connection");

const Grade = sequelize.define("grades", {
    grade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
 });

 module.exports=Grade;
 