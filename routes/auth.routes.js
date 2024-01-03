const router=require('express').Router();
const authController=require('../controller/auth.contollers');

router.post('/login',authController.loginUser);


module.exports=router;