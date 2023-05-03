const express = require("express");
const app = express();

const router = require('./routers/polyonetomanyRoutes')
app.use(router)

app.listen(6765, () => {
  console.log("server started on port 6765");
});
