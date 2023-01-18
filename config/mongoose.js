const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/contactListDB2');
const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error contecting to mongodb"));
db.once('open',function(){
    console.log("*********conected to database*************");
    

});







module.exports=db;