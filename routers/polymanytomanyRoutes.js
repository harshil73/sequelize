const { Router } = require("express");
const router = Router();


const adddata = require('../controller/polymanytomanyController').adddata;

const readdata = require('../controller/polymanytomanyController').readdata;
const deletedata = require('../controller/polymanytomanyController').deletedata;

router.get('/adddata',adddata)
router.get('/readdata',readdata)
router.get('/deletedata',deletedata)

module.exports=router