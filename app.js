// using sequelize doing curd operations in database and doing migration in it
const express = require("express");
const mysql2 = require("mysql2");
const app = express();

app.set("view engine", "ejs");

var bopa = require("body-parser");
app.use(bopa.json());
app.use(bopa.urlencoded({ extended: false }));

const { Sequelize, Op } = require("sequelize");
const { promiseImpl } = require("ejs");

const Movie = require("./models/create");

const sequelize = new Sequelize("sequelize_test", "root", "root", {
  host: "127.0.0.1",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connection established sucessfully!");
  })
  .catch((err) => {
    console.log(err);
  });
// console.log(sequelize)

// READING DATA
// app.get("/getdata", async (req, res) => {
//   sequelize
//     .query("select movieName,leadActors,director from movies", (err, data) => {
//       if (err) throw err;
//     console.log('data showing')
//     //   res.render('hello',data)
//     })
//     .then((data) => {
//     //   res.render("hello", {data:data});
//     res.json(data)
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });




// ADDING DATA 
// app.post('/addingData',(req,res)=>{
//     postdata = req.body;
//     console.log('data coming')
//     console.log(postdata)
//     Movie.bulkCreate([
//         postdata
//     ]).then((postdata)=>{
//         // console.log(data)
//         res.json(postdata)
//     }).catch((err)=>{
//         console.log('data insertion failed',err)
//     })
// })


// DELETE DATA
// app.delete('/delete',(req,res)=>{
//     Movie.destroy({
//         where:{
//             id:43
//         }
//     }).then((data)=>{
//         // console.log(data)
//         res.json(data)
//     }).catch((err)=>{
//         console.log('data insertion failed',err)
//     })
// })

// UPDATE DATA
// app.put('/update',(req,res)=>{
//   let updateId = req.query.id;
//   console.log(updateId)
//     Movie.update([
//       {
//         leadActors:'Akshay Kumar'
//       },
//       {
//         where:{
//           id:`${updateId}`
//         }
//       }
     
//     ]).then((data)=>{
//       console.log(data);
//        res.json(data)
//     }).catch((err)=>{
//       console.log(err)
//     })
//   })


// app.put("/update", async (req, res) => {
//   let updateId = req.query.id;
//     console.log(updateId)
//   sequelize.query(`update movies set leadActors='Akshay Kumar' where id=${updateId}`, (err, data) => {
//       if (err) throw err;
//     console.log(data)
//     })
//     .then((data) => {
//     res.json(data)
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });








// PAGINATION
// app.get('/pagination',async (req, res) => {
//   let order = req.query.order || 'ASC';
//   let page = req.query.id || 1;
//   console.log(page)
//   // let limit= req.query.id ?? 5;
//   offset_count = (page-1)*5

//   const total = await Movie.count();
//   console.log(total/5);
//     Movie.findAll({
//       limit:5,
//       offset:offset_count,
//       order: [
//         ["id",`${order}`],
//         ["movieName", `${order}`],
//         ["leadActors", `${order}`],
//         ["director",`${order}`]
//       ],
//     }).then((data)=>{
//       let count = Math.ceil(data.length/5);
//       console.log('count it is',count)
//       //  return res.render('hello',{data,count:total/5})
//       res.json(data);
//     }).catch((err)=>{
//       console.log(err)
//     })
// });



// SEARCHING
// app.get('/search',(req,res)=>{
//   let searchvalue = req.query.names;
//   console.log(searchvalue)
//   Movie.findAll({
//      where:{
//       movieName:searchvalue
//     }
//   }).then((data)=>{
//     // console.log(data)
//     return res.json(data)
//   }).catch((err)=>{
//     console.log(err)
//   })
// })

// app.get("/search", (req, res) => {
//   let searchvalue = req.query.name.trim();
//   Movie.findAll({
//     where: {
//       [Op.or]: [{
//       movieName: { [Op.like]: `%${searchvalue}%` }},{
//       director: { [Op.like]: `%${searchvalue}%`} },{
//       leadActors:{[Op.like]:`%${searchvalue}%`}
//       }
//     ]
//   }
//   })
//     .then((data) => {
//       // console.log(data);
//        res.json(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });


// app.get("/search", (req, res) => {
//   let searchvalue = req.query.name;
//   let x = (searchvalue.split(' '));
//   for(i=0;i<x.length;i++){
//     console.log(x[i])

//   Movie.findAll({
//     where: {
//       [Op.or]: [{
//       movieName: { [Op.in]: `%${x[i]}%` }},{
//       director: { [Op.in]: `%${x[i]}%`} },{
//       leadActors:{[Op.in]:`%${x[i]}%`}
//       }
//     ]
//   }
//     })
//     .then((data) => {
//       // console.log(data);
//        res.json(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     })};
// });



// SORTING
// app.get('/sorting',(req,res)=>{
//   let order = req.query.order || 'asc';

//   Movie.findAll({
//     order:[
//       ['movieName',`${order}`],
//       ['leadActors',`${order}`],
//       ['director',`${order}`]
//     ]
//   }).then((data)=>{
//      res.json(data)
//   }).catch((err)=>{
//     console.log(err)
//   })
// })


app.listen(5648, () => {
  console.log("server is running on port no. 5648");
});
