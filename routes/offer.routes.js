const router=require('express').Router();
const offerController=require('../controller/offer.contollers');


router.get('/getall',offerController.getAllOffer);

router.post('/create',offerController.createOffer);

// router.post('/update',cartController);

// router.post('/search',cartController);

// router.post('delete',cartController);


module.exports=router;