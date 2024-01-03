const db = require('../models/index');
const  subCat=db.subCat;

module.exports = {
    createsubCategory: (req, res) => {
         let { Name,mainCategoryId } = req.body;
        subCat.create({Name:Name,mainCategoryId:mainCategoryId}).then((data)=>{
            res.send({error:false, data:data});
        }).catch((err)=>{
            res.send({error:true, message:err.message});
        })
    },
}
