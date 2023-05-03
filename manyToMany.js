

const { Sequelize, DataTypes, Model } = require("sequelize");

const express = require('express');
const app = express();
const port = 6566


const router = require("./routers/manytomanyRoutes");

app.use(router)

app.listen((port),()=>{
  console.log(`server running on port ${port}`)
})



