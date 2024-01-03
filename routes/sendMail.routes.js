var express = require('express');
var router = express.Router();
const nodemailer=require('nodemailer');

router.post('/send-email',(req,res)=>{
  const {subject,recipient}=req.body;


  const transporter=nodemailer.createTransport({
    service:'Gmail',
    auth:{
      user:'Aman.kumar7771@gmail.com',
      pass:'Aman@123'
    }
  });

  //define email message

  const mailOptions={
    from:'aman.kumar0786717@gmail.com',
    to:recipient,
    subject:subject,
    html:'<p>order placed by flipcart</p> <br><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5f3d81106163451.5f897528aa41a.jpg">'
  };

  //use transporter object to send the email

  transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
      console.log(error);
      res.send('error sending mail');
    }else{
      console.log('Email sent: ' +info.response);
      res.send('email sent successfully');
    }

  });
});


module.exports = router;
