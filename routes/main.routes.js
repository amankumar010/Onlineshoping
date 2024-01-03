const router=require('express').Router();
const mainController=require('../controller/main.contollers');



router.post('/create', mainController.createmainCategory);




module.exports=router;