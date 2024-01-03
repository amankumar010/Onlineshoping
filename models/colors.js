module.exports=(sequelize,Sequelize)=>{
    const model=sequelize.define('colors',{
       id:{
           type:Sequelize.INTEGER,
           autoIncrement:true,
           primaryKey:true
       },
       color_name:{
           type:Sequelize.STRING(200),
          allowNull:false
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