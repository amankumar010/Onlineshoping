let jwt=require('jsonwebtoken');

module.exports={
    checkToken:(req,res,next)=>{
  
        let token=req.headers.token;
        if(token){
            jwt.verify(token,'secreatekey',(err,decoded)=>{
                if(err){
                    res.send({error:true,message:'unathorized token'});

                }else{
                    if(decoded){
                        req.user=decoded;
                        next();
                }
            }
        })
    }
    else{
        res.send({error:true,message:'token not provided'});
    }
 },
 isAdmin : (req, res, next) => {
    const token = req.headers.token;
       if (!token) {
          res.send({ error: 'Unauthorized. Token not provided.' });
        }
      jwt.verify(token, 'secreatekey', (err, decoded) => {
          if (err) {
             res.send({ error: ' Invalid token.' });
          }
      if (decoded.role===1) {
            req.user = decoded; 
            next();
          } else {
            res.send({ error: 'Only admin users are allowed.' });
          }
        });
    }
}   
  
