const user = require('../models/auth.model');
joi = require('joi');
var authvalidator = {};
authvalidator.register =(req,res,next) =>{
    if(req.body.name == ""){

    }else if(req.body.email == ""){

    }else if(req.body.password == ""){

    }else{
        next();
    }

}
module.exports = authvalidator;