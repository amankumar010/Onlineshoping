const router =require('express').Router();
const cartController=require('../controller/cart.controller');






router.post('/update',cartController.updateCart);

router.post('/search',cartController.searchCart);

router.post('/delete',cartController.deleteCart);


module.exports=router;