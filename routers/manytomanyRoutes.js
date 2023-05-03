const { Router } = require("express");
const router = Router();

const adddata = require('../controller/manytomanyController').adddata;
const readdata = require('../controller/manytomanyController').readdata;
const deletedata = require('../controller/manytomanyController').deletedata;

router.get('/adddata',adddata)
router.get('/readdata',readdata)
router.get('/deletedata',deletedata)

module.exports = router
