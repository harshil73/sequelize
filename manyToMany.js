const express = require('express');
const app = express();
const port = 5678


const routes = require("./routers/manytomanyRoutes");

app.use(routes)

app.listen((port),()=>{
  console.log(`server running on port ${port}`)
})



