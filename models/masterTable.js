
module.exports=(sequelize,Sequelize)=>{
    const model=sequelize.define('masterTable',{
       id:{
           type:Sequelize.INTEGER,
           autoIncrement:true,
           primaryKey:true
       },
       Name:{
           type:Sequelize.STRING(200),
          allowNull:false
       },
      
   
    },{
       freezeTableName:true,
       timestamp:true
    })
    return model;
   }