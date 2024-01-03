const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
  }).catch((err)=>{
    console.error('Unable to connect to the database:', err.message);
  })

  const db = {
    sequelize:sequelize,
    Sequelize:Sequelize
  }
  
  db.masterCategory=require('../models/masterTable')(sequelize,Sequelize); 
  db.mainCategory=require('../models/mainCategory')(sequelize,Sequelize); 
  db.subCategory=require('../models/subCategory')(sequelize,Sequelize); 
  db.Category=require('../models/category')(sequelize,Sequelize); 
  db.products=require('../models/productDetails')(sequelize,Sequelize); 
  db.imgagecolor=require('../models/imagecolor')(sequelize,Sequelize); 
  db.images=require('../models/images')(sequelize,Sequelize); 
  db.colors=require('../models/colors')(sequelize,Sequelize); 
  
  db.masterCategory.hasMany(db.mainCategory);
  db.mainCategory.belongsTo(db.masterCategory);
 
  db.mainCategory.hasMany(db.subCategory);
  db.subCategory.belongsTo(db.mainCategory);
 
  db.subCategory.hasMany(db.Category);
  db.Category.belongsTo(db.subCategory);
 
  db.Category.hasMany(db.products);
  db.products.belongsTo(db.Category);
 
  db.products.hasMany(db.images);
  db.images.belongsTo(db.products);
 
  db.products.hasMany(db.imgagecolor);
  db.imgagecolor.belongsTo(db.products);
  
  db.products.hasMany(db.colors);
  db.colors.belongsTo(db.products);
 
  db.colors.hasMany(db.imgagecolor);
  db.imgagecolor.belongsTo(db.colors);
  
  module.exports=db;
 