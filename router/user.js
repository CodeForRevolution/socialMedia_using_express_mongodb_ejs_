const express=require('express');
const router =express.Router();
const usercontroller=require('../controller/user_controller');


router.get('/profile',usercontroller.profile);
router.get('/log_in',usercontroller.log_in);
router.get('/sing_in',usercontroller.sing_in);
router.post('/create_new_user',usercontroller.create_new_user);
router.post('/log_in_user',usercontroller.log_in_user);

module.exports=router;