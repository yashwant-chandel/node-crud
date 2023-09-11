var mongoose = require("mongoose");
require('../models/auth.model');
const bcrypt = require('bcrypt');

var User = mongoose.model("users");
var authController = {};

const securePassword = async (password)=>{
    try{
        const hashPassword = await bcrypt.hash(password,10);
        return hashPassword;
    }catch(error){
        console.log(error.message);
    }
}

authController.register = (req ,res) =>{
    res.render('../views/authentication/register');
}
authController.registerProcc = async (req,res) =>{
   
    var password = await securePassword(req.body.password);
    var userdata = new User({name:req.body.name,email:req.body.email,password:password});
    userdata.save();
    res.redirect('/register');
    // console.log(req.body);
}
authController.login = (req,res) =>{
    
    res.render('../views/authentication/login');
}
authController.loginProcc = (req,res) =>{

    User.findOne({email: req.body.Email}).then(result =>{
        if(req.body.password === result.password){
          
            req.session.user_id = result._id;
            //   res.json(req.session);
            res.redirect('/home');
        }else{
            res.json("error 1");
            // res.redirect("/login",{Error:'block'});
        }
    }).catch(error=>{
        res.json("error");
        // res.redirect("/login");
    });
//  User.findOne({ email: req.body.email }).then(result=>{
//     res.json(result);
//  })
}
authController.Logout = (req,res)=>{
    session.destroy();
    return redirect('/login');
}
module.exports = authController;