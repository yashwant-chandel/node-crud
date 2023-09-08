var mongoose = require("mongoose");
require('../models/main.model');
const bcrypt = require('bcrypt');

var Employee = mongoose.model("Employee");
var employeeController = {};

employeeController.list = (req,res) => {
    Employee.find({}).then(result=>{
      // res.json(result);
      // console.log(result);
      // const password = 'password@123';
      // let hashedpassword = bcrypt.hash(password,8);
      // console.log(hashedpassword);
    res.render('../views/employees/show',{'result':result});
    }).catch(error=>{
        console.log(error);
   });
}
employeeController.save = (req,res) => {
    // console.log(req);
    var employe = new Employee(req.body);

    employe.save();
    res.redirect('/');
}
employeeController.delete = (req,res) =>{
  
Employee.deleteOne({_id: req.params.id}).then(result=>{
  res.redirect('/');
}).catch(error=>{
  console.log(error);
});
}
employeeController.edit = (req,res) =>{

  Employee.findOne({_id: req.params.id}).then(result=>{
    res.render('../views/employees/edit',{'result':result});
  }).catch(error=>{
    res.sendStatus(404);
    // console.log(err);
  });
}
employeeController.update = (req,res) =>{
  Employee.findOneAndUpdate({_id:req.body._id},req.body).then(result=>{
    res.redirect('/');
  }).catch(error=>{
    // console.log(err);
    res.sendStatus(404);
  })
}

module.exports = employeeController;