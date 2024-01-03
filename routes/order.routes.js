const router=require('express').Router();
const orderController=require('../controller/order.contollers');


router.get('/getall',orderController.getAllOrder);
router.get('/get',orderController.getOrder);

router.post('/create',orderController.createOrder);

router.post('/update',orderController.updateOrder);

router.post('/search',orderController.serachOrder);

router.post('delete',orderController.deleteOrder);


module.exports=router;