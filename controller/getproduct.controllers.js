const db = require('../models/index');
const product=db.product;
const cart=db.cart;


module.exports={


    getAllProduct:(req,res)=>{
        product.findAll({ order:[categoryId,ASC]},{where:{isActive:true}}).then((data)=>{
           res.send({error:false, data:data});
        }).catch((err)=>{
            res.send({error:true, message:err.message});
        })
       
    },
   


    getProduct: async(req, res) => {
        let id=req.params.id;
        connection.query(`SELECT  * FROM prod_details where prod_id=${id} `,(err, result) => {
            if (err) {
                
                res.send({ error: true, message: err });
            } else {
               connection.query(`SELECT * FROM images  where prod_id=${id}`,(err,image)=>{
                if(err){
                    res.send({ error: true, message: err });
                }else{
                    connection.query(`SELECT  * FROM colors  where prod_id=${id}`, (err, result1) => {
                        if (err) {
                            res.send({ error: true, message: err });
                        } else {
                            let colorid=result[0].color_id?result[0].color_id:0;
                            connection.query(`SELECT  * FROM imgcolor where color_id=${colorid}`, (err, colr) => {
                                if (err) {
                                    res.send({ error: true, message: err });
                                } else {
                                  
                                    res.send({ error: false, data:result, images:image, colors:result1 ,imgcolor:colr});
                                }
                            })
                           
                        }
                    })
                }
               })
              
             
            }
        })
    },

    getcolorimage: async(req, res) => {
        let productid=req.body.pid;
        let colorid=req.body.colorid;
        connection.query(`SELECT  * FROM colors where color_id=${colorid} & prod_id=${productid}`, (err, result1) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                connection.query(`SELECT  * FROM imgcolor where color_id=${colorid}`, (err, colr) => {
                    if (err) {
                        res.send({ error: true, message: err });
                    } else {
                        res.send({ error: false, colors:result1 ,imgcolor:colr});
                    }
                })
               
            }
        })
    },
    
    
 
    getMasterProduct: (req, res) => {
           connection.query(`SELECT  * FROM  master_table`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
              res.send({ error: false, data: result });
            }
        })
    },
    
    getMainProduct: (req, res) => {
        connection.query(`SELECT  * FROM  main_category`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    
    getSubProduct: (req, res) => {
        let id=req.params.id;
        connection.query(`SELECT sub_id ,Name FROM  sub_category where main_id=${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    
    getCartProduct: (req, res) => {
        connection.query(`SELECT  * FROM  category`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },

    
    

  
    
}


