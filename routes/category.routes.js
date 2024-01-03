const router=require('express').Router();
const catController=require('../controller/category.controllers');


// router.get('/getall', catControlle);

router.post('/create', catController.createCategory);

router.post('/update', catController.updateCategory);

router.post('/search', catController.searchCategory);

router.post('/delete', catController.deleteCategory);


module.exports=router;