const db = require('../models/index');
const master=db.master;

module.exports = {
    createMaster: (req, res) => {
         let { Name} = req.body;
    master.create({Name:Name}).then((data)=>{
            res.send({error:false, data:data});
        }).catch((err)=>{
            res.send({error:true, message:err.message});
        })
    },
}