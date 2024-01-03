var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');


var usersRouter = require('./routes/users.routes');
var middleware=require('./middleware/authenticate');
var authRouter=require('./routes/auth.routes');
var imageRouter=require('./routes/img.routes');
var productRouter= require('./routes/product.routes');
var orderRouter=require('./routes/order.routes');
var cartRouter=require('./routes/cart.routes');
var offerRouter=require('./routes/offer.routes');
var getproduct=require('./routes/getproduct.routes');
var catRouter=require('./routes/category.routes');
var subRouter=require('./routes/sub.routes');
var mainRouter=require('./routes/main.routes');
var masterRouter=require('./routes/master.routes');
var emailRouter=require('./routes/sendMail.routes');
const db = require('./models/index');
var cors=require('cors');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'upload')));


app.use('/users',middleware.checkToken,usersRouter);
app.use('/auth',authRouter);
app.use('/image',imageRouter);
app.use('/product',middleware.isAdmin,productRouter);
app.use('/order',orderRouter);
app.use('/cart',cartRouter);
app.use('/offer',offerRouter);
app.use('/get',getproduct);
app.use('/email',emailRouter);
app.use('/cat',catRouter);
app.use('/sub',subRouter);
app.use('/main',mainRouter);
app.use('/master', masterRouter);

db.sequelize.sync({force:true});

module.exports = app;
