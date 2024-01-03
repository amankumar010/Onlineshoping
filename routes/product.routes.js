const router=require('express').Router();
const productController=require('../controller/product.controllers');
const multer=require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload')
    },
    filename: function (req, file, cb) {
        let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
      const uniqueSuffix = Date.now();
      cb(null, file.fieldname + '-' + uniqueSuffix+ext)
    }
  })
  
  
  const upload = multer({ storage: storage });

router.post('/create',upload.array('profile',10),productController.createProduct);
router.post('/Add',productController.AddSize);
router.post('/Addcolor',upload.array('profile',10),productController.Addcolor);

router.post('/update/:id',productController.updateProduct);

router.post('/search/:id',productController.searchProduct);

router.post('delete/:id',productController.deleteProduct);

module.exports=router;