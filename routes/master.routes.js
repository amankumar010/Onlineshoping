const router=require('express').Router();
const masterController=require('../controller/master.controllers');




router.post('/create',  masterController.createMaster);




module.exports=router;