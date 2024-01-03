const db = require('../models/index');

const product=db.product;

module.exports = {
    createProduct: (req, res) => {
        let profileimg = req.files[0].filename;
        let { name,desc,price,discount,prod_details,extra_details,createdBy,size,categoryId } = req.body;
        product.create({prod_name:name,prod_desc:desc,prod_price:price,prod_discount:discount,prod_img:profileimg,prod_details:prod_details,extra_details:extra_details,isActive:true,createdBy:createdBy,size:size,categoryId:categoryId }).then((data)=>{
            res.send({error:false, data:data});
        }).catch((err)=>{
            res.send({error:true, message:err.message});
        })
    },

    AddSize: (req, res) => {
        let { prod_id, sizes, quantity, scale } = req.body;
        connection.query(`INSERT INTO size(size_id,prod_id,sizes,quantity,scale) VALUES(0,${prod_id},'${JSON.stringify(sizes)}',${quantity},'${scale}')`, (err, result) => {
            if (err) {
                res.status(500).send({ error: true, message: err });
            } else {
                res.status(200).send({ error: false, data: result });
            }
        });


    },

    Addcolor: (req, res) => {
        let profileimg = req.files[0].filename;
        let { color, prod_id } = req.body;
        connection.query(`INSERT INTO colors(color_id,color_name,img_url,prod_id) VALUES (0,'${color}','${profileimg}',${prod_id})`, (err, result) => {
            if (err) {
                res.status(500).send({ error: true, message: err });
            } else {
                req.files.map((img) => {
                    connection.query(`insert into imgcolor(imgcolor_id,img_url,color_id) values (0,'${img.filename}',${result.insertId})`);
                })

                res.status(200).send({ error: false, data: result });
            }
        });



    },




    updateProduct: (req, res) => {
        connection.query(`update product_details set prod_name='${req.body.name}' where prod_id=${req.params.id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    searchProduct: (req, res) => {
        let id = req.params.id;
        connection.query(`select * from product_details where prod_id=${id} & prod_status=1`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    deleteProduct: (req, res) => {
        let id = req.params.id;
        connection.query(`delete from product_details where prod_id=${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
}