const db = require('../models/index');
const mainCat=db.mainCat;

module.exports = {
    createmainCategory: (req, res) => {
         let { Name,masterTableId	,subCategoryId } = req.body;
        mainCat.create({Name:Name,subCategoryId:subCategoryId,masterTableId	:masterTableId	}).then((data)=>{
            res.send({error:false, data:data});
        }).catch((err)=>{
            res.send({error:true, message:err.message});
        })
    }
}