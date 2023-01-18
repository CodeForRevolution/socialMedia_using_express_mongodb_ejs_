const cookieParser = require("cookie-parser");
const user = require("../model/user");
const User=require('../model/user');
const { use } = require("../router");

// const user=require('../model/user')


module.exports.profile=function(req,res){

    console.log(req.cookies.user_id);
    User.findById(req.cookies.user_id,function(err,user){
        console.log(user)
       if(err){
        console.log("error in finding the profile");
       }
      res.render('profile',{
        user:user
      })
    });
  
   
  
}




module.exports.log_in=function(req,res){
    console.log(req.cookies);
    res.cookie('user_id','ansari shakir');
    
    res.render('log_in');
}

module.exports.sing_in=function(req,res){
    res.render('sing_in');
}











module.exports.create_new_user = function (req, res) {
    if (req.body.password != req.body.confirm_password) {
        return res.send("password not match <a href='/user/sing_in'>Go back</a>");
    }
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            console.log("error in creating new user");
        }
        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) {
                    console.log("error in creating new user");
                }
                console.log("****new user created****");
                res.redirect('/user/log_in');
            })

        } else {
            console.log("User is already is present");
            res.redirect('back');
        }
    })

}

module.exports.log_in_user=function(req,res){

    console.log(req.body);
    
    User.findOne( {email:req.body.email},function(err,user){
        if (err) {
            console.log("error in creating new user");
            return;
        }
     if(req.body.password!=user.password){
        console.log("password not match");
     }else{
        console.log("hurrey passowrd match again",user.name);
     
        res.cookie('user_id',user._id);
        console.log("cookie is :",req.cookies)
        
        res.redirect('/user/profile');
     }
    
    })



}