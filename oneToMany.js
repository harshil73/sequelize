const express = require("express");
const app = express();
const port = 6565;

const router = require("./routers/onetomanyRoutes");

app.use(router);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
