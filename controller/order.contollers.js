const db = require('../models/index');
module.exports = {
    getAllOrder: (req, res) => {
        connection.query(`SELECT o.order_id, o.user_id, p.prod_name, p.prod_price
        FROM order_details as o JOIN product_details as p ON o.prod_id = p.prod_id`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    getOrder: (req, res) => {
        connection.query(`SELECT uo.userOrder_id, uo.user_id, uo.status, o.prod_id, o.quantity
        FROM user_orders as uo
        JOIN order_details as o ON uo.order_id = o.order_id`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    createOrder: (req, res) => {
        let { user_id, prod_name, quantity, amount, createdate, prod_id } = req.body;
        connection.query(`insert into order_details (order_id,user_id,prod_name,qauntity,amount,createdate,prod_id) values(0,${user_id},'${prod_name}',${quantity},${amount},'${createdate}',${prod_id})`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    updateOrder: (req, res) => {
        connection.query(`update order_details set order_name='${req.body.name}' where order_id=${req.params.id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    serachOrder: (req, res) => {
        let id = req.params.id;
        connection.query(`select * from order_details where order_id=${id} & user_id=1 `, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },
    deleteOrder: (req, res) => {
        let id = req.params.id;
        connection.query(`delete from order_details where order_id=${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },

}