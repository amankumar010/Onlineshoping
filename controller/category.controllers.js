const db = require('../models/index');
const cat=db.cat;

module.exports = {
    createCategory: (req, res) => {
         let { Name,subCategoryId } = req.body;
         cat.create({Name:Name,subCategoryId:subCategoryId}).then((data)=>{
            res.send({error:false, data:data});
        }).catch((err)=>{
            res.send({error:true, message:err.message});
        })
    },
    updateCategory: (req, res) => {
        connection.query(`UPDATE cart_details SET qty = '3' WHERE user_id = '1' AND prod_id = '1'`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
   deleteCategory: (req, res) => {
        connection.query(`DELETE FROM cart_details WHERE user_id = '1' AND prod_id = '1'`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    searchCategory: (req, res) => {

        connection.query(`SELECT SUM(qty) AS total_items FROM cart_details WHERE user_id = '1'`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                if (result[0].cart_id === null) {
                    res.send({ error: false, message: 'cart is empty' });
                }
                else {
                    res.send({ error: false, data: result });
                }
            }

        })
    }
}