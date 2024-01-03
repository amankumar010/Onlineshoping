const db = require('../models/index');
module.exports = {
    getAllOffer: (req, res) => {
        connection.query(`select of.offer_id,of.offer_name,of.discount, of.validity,p.prod_name from offer as of left join product_details as p ON p.prod_id=of.prod_id`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }

        })
    },
    createOffer: (req, res) => {
        let { name, discount, validity, prod_id } = req.body;
        connection.query(`insert into offer(offer_id,offer_name,discount,validity,prod_id) values(0,'${name}','${discount}','${validity}',${prod_id})`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }

        })
    }
}