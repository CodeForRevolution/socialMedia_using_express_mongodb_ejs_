const express=require("express");
const homecontroller=require('../controller/home_controller')
const router=express.Router();

router.get('/',homecontroller.home);
router.use('/user',require('./user'));

module.exports=router