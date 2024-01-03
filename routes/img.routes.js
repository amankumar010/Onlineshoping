const router=require('express').Router();
const imgController=require('../controller/img.contollers');
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

  router.get('/',imgController.getAllImages);
  router.post('/create',upload.array('profile',10),imgController.createImage);



module.exports=router;