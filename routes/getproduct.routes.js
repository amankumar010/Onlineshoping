const router=require('express').Router();
const getController=require('../controller/getproduct.controllers');

router.get('/getall',getController.getAllProduct);

router.get('/getproduct/:id',getController.getProduct);

router.post('/getcolorimages',getController.getcolorimage);


router.get('/getmaster',getController.getMasterProduct);
router.get('/getmain',getController.getMainProduct);
router.get('/getsub/:id',getController.getSubProduct);
router.get('/getcat',getController.getCartProduct);



module.exports=router;