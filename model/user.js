
const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
 email:{
    type:String,
    required:true
 },
 password:{
    type:String,
    required:true
 },
 name:{
    type:String,
    require:true
 }
},{
    timestamp:true
});
const user = mongoose.model('userDATA', thingSchema);
module.exports=user;