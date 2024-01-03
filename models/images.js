module.exports=(sequelize,Sequelize)=>{
    const model=sequelize.define('images',{
       id:{
           type:Sequelize.INTEGER,
           autoIncrement:true,
           primaryKey:true
       },
       img_url:{
           type:Sequelize.STRING(200),
          allowNull:false
       },
      
   
    },{
       freezeTableName:true,
       timestamp:true
    })
    return model;
   }