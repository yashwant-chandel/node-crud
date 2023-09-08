var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
    name: String,
    age: String,
    address: String,
  });

 module.exports = mongoose.model('Employee', EmployeeSchema);