const express=require('express');
const cookieParser=require('cookie-parser');
const { route } = require('./router');
const db=require('./config/mongoose');
const user=require('./model/user');

const app=express();
app.use(cookieParser());
app.use(express.urlencoded());

const port=3000;

app.use('/',require('./router/index'))
app.set('view engine','ejs')
app.set('views','./views');
app.use(express.static('./assets'))







app.listen(port,function(err){
    if(err){
        console.log("error in creating server");
        return;
    }
    console.log("*********Server is started**************");
})



