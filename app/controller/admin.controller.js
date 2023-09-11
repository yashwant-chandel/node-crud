var mongoose = require("mongoose");
require('../models/auth.model');
const bcrypt = require('bcrypt');

var User = mongoose.model("users");
var adminController = {};

adminController.home = (req,res)=>{
    res.render("../view/admin/home/index.js");
}
module.exports = adminController;
