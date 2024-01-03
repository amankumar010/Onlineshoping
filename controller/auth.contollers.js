const { compare } = require('bcryptjs');
const db = require('../models/index');
let jwt = require('jsonwebtoken');

module.exports = {

  loginUser: (req, res) => {
    let { Email, Pass } = req.body;
    connection.query(`select * from user_details where user_email='${Email}'`, async (err, result) => {
      if (err) {
        res.send({ error: true, message: err });

      } else {
        let isSame = await compare(Pass, result[0].user_pass);
        if (isSame) {
          let token = jwt.sign({ id: result[0].user_id, Name: result[0].user_name, role: result[0].isAdmin }, 'secreatekey', { algorithm: 'HS256', expiresIn: '1h' })
          res.send({ error: false, message: 'login in', token: token });
        } else {
          res.send({ error: true, message: 'login failed' });
        }
      }

    })
  }

}