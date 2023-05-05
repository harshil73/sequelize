const { Router } = require("express");
const router = Router();

const adddata = require('../controller/onetomanyController').adddata;
const readdata = require('../controller/onetomanyController').readdata;
const updatedata = require('../controller/onetomanyController').updatedata;

router.get('/adddata',adddata)
router.get('/readdata',readdata)
router.get('/updatedata',updatedata)

module.exports = router;