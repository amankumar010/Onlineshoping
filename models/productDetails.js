
module.exports=(sequelize,Sequelize)=>{
    const model=sequelize.define('product_details',{
       id:{
           type:Sequelize.INTEGER,
           autoIncrement:true,
           primaryKey:true
       },
      prod_name:{
           type:Sequelize.STRING(300),
           allowNull:false
   
       },
       prod_desc:{
           type:Sequelize.STRING(300),
           allowNull:false
       },
       prod_price:{
           type:Sequelize.INTEGER(200),
           allowNull:false
       },
       prod_discount:{
           type:Sequelize.INTEGER(200),
           allowNull:false
       },
       
       prod_img		:{
           type:Sequelize.STRING(200),
           allowNull:false
       },
       prod_details:{
           type:Sequelize.STRING(200),
           allowNull:false
       },
       extra_details:{
           type:Sequelize.STRING(200),
           allowNull:false
       },
       isActive:{
           type:Sequelize.BOOLEAN,
           defaultValue:true
       },
       createdBy:{
           type:Sequelize.INTEGER(200),
           allowNull:false
       },
       size:{
           type:Sequelize.INTEGER(200),
           allowNull:false
       }
   
   
   
    },{
       freezeTableName:true,
       timestamp:true
    })
    return model;
   }