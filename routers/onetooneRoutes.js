const { Router } = require("express");
const router = Router();

const adddata = require('../controller/onetooneController').adddata;
const readdata = require('../controller/onetooneController').readdata;


router.get('/adddata',adddata)
router.get('/readdata',readdata)

module.exports = router