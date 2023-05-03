const { Router } = require("express");
const router = Router();

const adddata = require('../controller/polyonetomanyController').adddata;
const addvideodata = require('../controller/polyonetomanyController').addvideodata;
const readdata = require('../controller/polyonetomanyController').readdata;
const deletedata = require('../controller/polyonetomanyController').deletedata;


// console.log(adddata)

router.get('/adddata',adddata)
router.get('/addvideodata',addvideodata)
router.get('/readdata',readdata)
router.get('/deletedata',deletedata)

module.exports = router;