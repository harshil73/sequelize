const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    'sequelize_test',
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

module.exports=sequelize;