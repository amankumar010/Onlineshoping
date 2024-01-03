const db = require('../models/index');

module.exports = {
    getAllImages: (req, res) => {
        connection.query(`select * from images`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                res.send({ error: false, data: result });
            }
        })
    },

    createImage: (req, res) => {
        let {  prod_id } = req.body;
        req.files.map((img) => {
            connection.query(`insert into images(img_id,img_url,prod_id) values (0,'${img.filename}',${prod_id}) `, (err, result) => {
                if (err) {
                    res.send({ error: true, message: err });
                } else {
                    res.send({ error: false, data: result });
                }
            })

        })

    }
}