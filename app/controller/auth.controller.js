var mongoose = require("mongoose");
require('../models/auth.model');
const bcrypt = require('bcrypt');

var User = mongoose.model("users");
var authController = {};

authController.register = (req ,res) =>{
    res.render('../views/authentication/register');
}
authController.registerProcc = (req,res) =>{
    var userdata = new User(req.body);
    userdata.save();
    // res.redirect('/register');
    // console.log(req.body);
    res.json(req.body.password);
}
authController.login = (req,res) =>{
    res.render('../views/authentication/login');
}
authController.loginProcc = (req,res) =>{

    User.findOne({email: req.body.Email}).then(result =>{
        if(req.body.password === result.password){
            res.redirect('/home');
        }else{
            res.render("../views/authentication/login.ejs",{Error:'block'});
        }
    }).catch(error=>{
        res.redirect("/login");
    });
//  User.findOne({ email: req.body.email }).then(result=>{
//     res.json(result);
//  })
}
module.exports = authController;