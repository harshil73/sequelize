const { Sequelize, DataTypes, Model, Op } = require("sequelize");
let sequelize = require('../database/connection')

const image1 = require("../models/image1")(sequelize, DataTypes, Model);
const video1 = require("../models/video1")(sequelize, DataTypes, Model);
const tag = require("../models/tag")(sequelize, DataTypes, Model);
const taggable = require("../models/taggable")(sequelize, DataTypes, Model);

image1.belongsToMany(tag, {
  through: {
    model: taggable,
    unique: false,
    scope: {
      taggableType: "image",
    },
  },
  foreignKey: "taggableId",
  constraints: false,
});

tag.belongsToMany(image1, {
  through: {
    model: taggable,
    unique: false,
  },
  foreignKey: "tagId",
  constraints: false,
});

video1.belongsToMany(tag, {
  through: {
    model: taggable,
    unique: false,
    scope: {
      taggableType: "video",
    },
  },
  foreignKey: "taggableId",
  constraints: false,
});

tag.belongsToMany(video1, {
  through: {
    model: taggable,
    unique: false,
  },
  foreignKey: "tagId",
  constraints: false,
});

const adddata = async(req,res)=>{
    let imagedata = await image1.create({
        title:'handeercelposts.png',
        url:'www.handeercelposts.com'
    })

    // let videodata = await video1.create({
    //     title:'fight club',
    //     text:'hollywood '
    // })

    let tagdata = await tag.create({
        name:'hande ercel image'
    })
    // console.log(tagdata.id)

    if(imagedata.id && tagdata.id){
        let taggabledata = await taggable.create({
            tagId:tagdata.id,
            taggableId:imagedata.id,
            taggableType:'image'
        })
        res.send(taggabledata)
    }
}


const readdata = async(req,res)=>{
    // let data = await image1.findAll({
    //     include:[tag]
    // })
    // res.send(data)

    let data = await tag.findAll({
        include:[image1,video1]
    })
    res.send(data)
}


const deletedata = async(req,res)=>{
    let deleteddata = await image1.destroy({
        where:{id:1}
    },{
        include:[tag]
    })
    console.log(deleteddata)
    res.send(deleteddata)

    // image1.destroy(({where:{id:5}})).then((data)=>{
    //     console.log(data)
    //     taggable.destroy({where:{taggableId:5}}).then((data)=>{
    //         console.log(data)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }).catch((err)=>{
    //     console.log(err)
    // })
}

module.exports = {adddata,readdata,deletedata}


//   image1.destroy({
//     where:{id:8}
// },{
//     include:[taggable]
// }).then((data)=>{
//     console.log('data deleted!',data)
// }).catch((err)=>{
//     console.log((err))
// })


// video1.destroy({
//     where:{
//         id:3
//     }
// },{
//     include: tag,
//   }).then((data)=>{
//     console.log(data)
//   }).catch((err)=>{
//     console.log(err)
//   });