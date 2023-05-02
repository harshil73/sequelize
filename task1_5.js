const express = require("express");
const app = express();
const port = 7766;
app.set("view engine", "ejs");

const { Sequelize, DataTypes, Model, Op } = require("sequelize");
const sequelize = new Sequelize("sequelize_test", "root", "root", {
  host: "127.0.0.1",
  dialect: "mysql",
});

const team = require("./models/team")(sequelize, DataTypes, Model);

app.get("/hello", (req, res) => {
  res.send("Gentalman Welcome To Fight Club!");
});

// app.get('/alldata',(req,res)=>{
//     team.findAll({
//         include:[player]
//     }).then((data)=>{
//         // console.log(data)
//         // res.render('alldata',{data,datalength:data.length})
//         res.render('showdata',{data,datalength:data.length})
//         // res.send(data)
//     }).catch((err)=>{
//         console.log(err)
//     })
//     })

app.get("/data_table", (req, res) => {
  res.render("alldata");
});

app.get("/get_data", async (req, res, next) => {
  const draw = req.query.draw;
  const start = req.query.start;
  const length = req.query.length;
  var order = req.query.order;
  const search = req.query.search;
  const searchValue = search.value;
  console.log(searchValue);
   console.log(order)

  const recordsTotal = await team.count();
  const recordsFiltered = recordsTotal;

  console.log("draw", draw);
  console.log("start", start);
  console.log("length", length);
  console.log("order", order);
  console.log("search", search);

  if (order) {
    var column = order[0].column;
    var dir = order[0].dir;
    var colName = req.query.columns[column].data;
    var orderBy = [[colName, dir]];
  } else {
    var orderBy = ["id"];
  }

  const data = await team.findAll({
    offset: parseInt(start),
    limit: parseInt(length),
    order: orderBy,
    where: {
      [Op.or]: {
        teamname: {
          [Op.like]: `${searchValue}%`,
        },
      },
    },
  });

  res.json({
    draw: parseInt(draw),
    data: data,
    recordsTotal: recordsTotal,
    recordsFiltered: recordsFiltered, 
  });
});



app.listen(port, () => {
  console.log(`server is running on port no. ${port}`);
});


