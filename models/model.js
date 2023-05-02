const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../connection");

class models extends Model {}

models.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:'harshil kumar'
    },
    total_runs: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'Cricket',
    timestamps:false,
  }
);

// model.init(
//     {
//       country_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       population: {
//         type: DataTypes.INTEGER,
//       },
//     },
//     {
//       sequelize,
//       modelName: 'Countries'
//     }
//   );

sequelize.sync().then(()=>{
    console.log('database created!')
}).catch((err)=>{
    console.log(err)
})


models.bulkCreate([{name:'Virat Kohli',total_runs:20000},{name:'MS Dhoni',total_runs:12347}]).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

// model.drop().then(()=>{
//     console.log('tables dropped!');
// })


// const cricket = new Cricket({ name: "Virat Kohli", total_runs: 20000 });
// console.log(cricket.total_runs);
// console.log(cricket.name);
