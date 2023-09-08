const user = require('../models/auth.model');
var authmiddlerware = {};
authmiddlerware.isLogin =(req,res,next) =>{
    if(req.session.user_id){
        next();
    }else{
        res.redirect('/login');
    }
    // console.log(req.)
}
module.exports = authmiddlerware;