var mongoose = require("mongoose");
require('../models/auth.model');
const bcrypt = require('bcrypt');

var User = mongoose.model("users");
var homeController = {};

homeController.home = (req,res) =>{

    res.render('../views/home/index.ejs');
}

module.exports = homeController;