const router=require('express').Router();
const subController=require('../controller/sub.contollers');


// router.get('/getall', catControlle);

router.post('/create', subController.createsubCategory);

// router.post('/update',subController.updateCategory);

// router.post('/search', subController.searchCategory);

// router.post('/delete',subController.deleteCategory);


module.exports=router;