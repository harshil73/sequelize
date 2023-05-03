const express = require("express");
const app = express();
const port = 7677 || PORT.process.env;


const router = require('./routers/polymanytomanyRoutes')
app.use(router)

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
