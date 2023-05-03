const { Router } = require("express");
const router = Router();

const get_data = require("../controller/datatablesController").get_data;
const data_table = require("../controller/datatablesController").data_table;

// console.log(get_data);
// console.log(data_table);

// router.get("/", (req, res) => res.redirect("/data_table"));
router.get("/get_data", get_data);
// router.use("/player", );
router.get("/data_table", data_table);
// router.use("*", data_table);

module.exports = router;
