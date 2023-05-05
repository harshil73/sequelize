// const { Sequelize, DataTypes, Model } = require("sequelize");
// const sequelize = require("./connection");

const express = require("express");
const app = express();
const port = 5555
const router = require('./routers/onetooneRoutes')

app.use(router)
  
app.listen(port, () => {
  console.log(`server is running on port no. ${port}`);
});

