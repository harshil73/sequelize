const { Router } = require("express");
const router = Router();

const adddata = require('../controller/manytomanyController').adddata;
const readdata = require('../controller/manytomanyController').readdata;
const deletedata = require('../controller/manytomanyController').deletedata;

console.log(adddata,readdata,deletedata)

router.get('/add',adddata)
router.get('/read',readdata)
router.get('/delete',deletedata)

module.exports = router;
