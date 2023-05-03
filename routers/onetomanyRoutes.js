const { Router } = require("express");
const router = Router();

const adddata = require('../controller/onetomanyController').adddata;
const readdata = require('../controller/onetomanyController').readdata;

router.get('/adddata',adddata)
router.get('/readdata',readdata)

module.exports = router;