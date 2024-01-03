const db = require('../models/index');
const product=db.product;

module.exports = {
   
    updateCart: (req, res) => {
        connection.query(`UPDATE cart_details SET qty = '6' WHERE user_id = '1' AND prod_id = '1'`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    deleteCart: (req, res) => {
        connection.query(`DELETE FROM cart_details WHERE user_id = '1' AND prod_id = '1'`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    searchCart: (req, res) => {

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