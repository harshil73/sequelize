const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../connection");
const Student = sequelize.define("students", {
    student_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
 });

 module.exports=Student;