const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  'project',
  'root',
  'root',
  {
      host:'127.0.0.1',
      dialect:'mysql'
  }
)

sequelize.authenticate().then(()=>{
  console.log('connection established sucessfully!')
}).catch((err)=>{
  console.log(err)
})
const Movie = sequelize.define('movies',{
  id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
       primaryKey: true
  },
  movieName:{
      type:DataTypes.STRING,
      allowNull: false
  },
  leadActors:{
      type:DataTypes.STRING
  },
  director:{
      type:DataTypes.STRING
  },
  releaseDate:{
      type:DataTypes.DATEONLY,
  }
},{
  paranoid:true,
});

sequelize
  .sync()
  .then(() => {
    console.log("movies database created successfully!");

    // INSERING THE DATA
//     Movie.bulkCreate([
//       {
//       movieName:'Pathaan',
//       leadActors:"Lionardo D'caprio",
//       director:'Quentine tarantino',
//       releaseDate:'2021-8-16'
//   },
//   {
//       movieName:'Chup',
//       leadActors:'Brad Pitt',
//       director:'David Fincher',
//       releaseDate:'1994-4-14'
//   },
//   {
//       movieName:'kagaz ke Phool',
//       leadActors:'Hrithik Roshan',
//       director:'Sidharth Anand',
//       releaseDate:'2017-10-2'
//   }
// ]).then((data)=>{
//   console.log(data)
// }).catch((err)=>{
//   console.log(err)
// })


// READING THE DATA
Movie.findAll()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("no data inside the table", err);
      });
  

    //   Movie.findOne({
    //     where:{
    //         id:3    
    //     }
    // }).then((data)=>{
    //         console.log(data)
    //     }).catch((err)=>{
    //         console.log('no data inside the table',err)
    //     })


        // Movie.findAndCountAll({
        //   where:{
        //     movieName: {
        //       [Op.like]: 'O%'
        //     }
        //   }
        // }).then((data)=>{
        //   console.log(data)
        // }).catch((err)=>{
        //   console.log(err)
        // })


// DELETING THE DATA
      //   Movie.destroy({
      //     where:{
      //         id:2
      //     }
      // }).then((data)=>{
      //         console.log('record deleted succesfully!')
      //         console.log(data)
      //     }).catch((err)=>{
      //         console.log('no data inside the table',err)
      //     })


  // UPDATING THE DATA
//  Movie.update(
//     {
//       leadActors:'Dulquer Salmaan'
//     },{
//       where:{id:2}
//     }).then((data)=>{
//     console.log(data)
//   }).catch((err)=>{
//     console.log(err)
//   })
  

//    async function update(){
//    const data = Movie.update(
//       {leadActors:'Dulquer Salmaan'},{
//         where:{id:2}
//       })

//       let result = await data;
//       let x = await result
//       console.log(x)
//   }

//  update();
 
  })
  .catch((err) => {
    console.log("Unable to create movies table:", err);
  });
