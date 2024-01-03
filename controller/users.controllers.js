const db = require('../models/index');
const bcrypt = require('bcrypt');
let { validationResult } = require('express-validator');



module.exports = {
    getAllUser: (req, res) => {
        connection.query(`select u.user_id,u.user_name,u.user_mob,u.user_address,o.prod_name from user_details as u inner join order_details as o ON u.user_id=o.user_id`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {
                console.log(result)
                res.send({ error: false, data: result });
            }

        })
    },
    createUser: (req, res) => {
        let { name, email, pass, mobile, address, createdat } = req.body;
        let errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.send({ error: errors.array() })
        } else {
            let salt = bcrypt.genSaltSync(10);
            let hashPassword = bcrypt.hashSync(pass, salt);

            connection.query(`insert into user_details (user_id,user_name,user_email,user_pass,user_mob,user_address,isAdmin,created_at) values (0,'${name}','${email}','${hashPassword}','${mobile}','${address}',0,'${createdat}')`, (err, result) => {
                if (err) {
                    res.send({ error: true, message: err });
                } else {

                    res.send({ error: false, data: result });
                }
            })
        }
    },
    updateUser: (req, res) => {
        connection.query(`update user set user_adress='${req.body.address} where user_id=${req.params.id}'`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {

                res.send({ error: false, data: result });
            }
        })


    },
    searchUser: (req, res) => {
        connection.query(`select * from user_details where isAdmin=1 `, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {

                res.send({ error: false, data: result });
            }
        })


    },
    deleteUser: (req, res) => {
        let { id } = req.params.id;
        connection.query(`delete from user_details where user_id=${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err });
            } else {

                res.send({ error: false, data: result });
            }
        })


    }

}
