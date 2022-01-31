const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  
  Empcode: { type: String, required: true },
  name: { type: String, required: true },
  department: { type: String, required: true },  
  Gender: { type: String, required: true },
  DOB: { type: Date, required: true },
  JoningDate: { type: Date, required: true },
  PrevExperiance: { type: Number, required: true },
  Salary: { type: Number, required: true },
  Address: { type: String, required: true },
}, {
  timestamps: true,
});

const Employee = mongoose.model('Employees', employeeSchema);

module.exports = Employee;