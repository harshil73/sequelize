const express = require("express");
const app = express();

const { Sequelize, DataTypes, Model } = require("sequelize");
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

const image = require("./models/image")(sequelize, DataTypes, Model);
const video = require("./models/video")(sequelize, DataTypes, Model);
const comment = require("./models/comment")(sequelize, DataTypes, Model);

video.hasMany(
  comment,
  {
    foreignKey: "commenttableId",
    constraints: false,
    scope: {
      commenttableType: "video",
    },
  },
  { through: "comments" }
);
comment.belongsTo(video, { foreignKey: "commenttableId", constraints: false });

image.hasMany(
  comment,
  {
    foreignKey: "commenttableId",
    constraints: false,
    scope: {
      commenttableType: "image",
    },
  },
  { through: "comments" }
);
comment.belongsTo(image, { foreignKey: "commenttableId", constraints: false });

video.create({title:'rise of tata',text:'all about sir ratan tata'}).then((videodata)=>{
    // console.log(data)
    console.log(videodata.id)
    image.create({title:'sdsdd', url:'fdfdf'}).then((imagedata)=>{
      console.log(imagedata.id)
         if(videodata.id && imagedata.id){
          comment.create({commenttableType:'image',commenttableId:imagedata.id})
          comment.create({commenttableType:'video',commenttableId:videodata.id})
         }
    }).catch((err)=>{
      console.log(err)
    })
}).catch((err)=>{
    console.log(err)
})

app.get("/getdata", async (req, res) => {
  image
  .create({ title: "hande ercel", url: "www.handeercelposts.com" })
  .then((imagedata) => {
    // console.log(imagedata.id);
    if (imagedata.id) {
      comment.create({
        commenttableType: "image",
        commenttableId: imagedata.id,
      });
    }
    return res.status(200).send(imagedata)
  })
  .catch((err) => {
    console.log(err);
  });

  // const data = await image.findOne({
  //   where:{
  //  title:'sdsdd'
  //   },
  // include: [comment]
  // });


  // const data = await image.findAll({
  //   include: [comment]
  // });

});

// app.get('/delete',async(req,res)=>{
//   const data = await image.destroy({
//     where:{id:2}
//   },{
//     include: [comment]
//   })
//   console.log(data);
//   res.send('Data Deleted successfully!');
// })

app.listen(6765, () => {
  console.log("server started on port 6765");
});
