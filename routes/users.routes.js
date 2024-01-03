const router=require('express').Router();
const userController=require('../controller/users.controllers');
const {body}=require('express-validator');


router.get('/getall', userController.getAllUser);

router.post('/create',
[body('name').notEmpty().withMessage('username is required').isAlpha().withMessage('username in char only').isLength({min:2,max:30}).withMessage('enter user valid in length'),
body('email').notEmpty().withMessage('email is required').isEmail().withMessage('enter valid email').isLength({min:2,max:30}).withMessage('enter email valid in length'),
body('password').notEmpty().withMessage('password is required').isLength({min:2,max:30}).withMessage('enter valid password'),
body('mobile').notEmpty().withMessage('mobile is required').isNumeric().withMessage('enter valid mobile').isLength({min:10,max:12}).withMessage('enter mobile valid in length'),
body('address').notEmpty().withMessage('address is required').isLength({min:2,max:30}).withMessage('enter address valid in lenght'),
body('createdat').notEmpty().withMessage('username is required').isLength({min:2,max:30}).withMessage('enter date valid in lenght'),],
userController.createUser);

router.post('/update', userController.updateUser);

router.post('/search', userController.searchUser);

router.post('delete', userController.deleteUser);


module.exports=router;