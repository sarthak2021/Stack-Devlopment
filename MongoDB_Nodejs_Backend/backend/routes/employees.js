const router = require('express').Router();
let Employee = require('../models/employee.model');

router.route('/').get((req, res) => {
  Employee.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const Empcode = req.body.Empcode;
  const name = req.body.name;
  const department = req.body.department;
  const Gender = req.body.Gender; 
  const DOB = Date.parse(req.body.DOB);
  const JoningDate = Date.parse(req.body.JoningDate);
  const PrevExperiance = Number(req.body.PrevExperiance); 
  const Salary = Number(req.body.Salary); 
  const Address = req.body.Address;
  
  

  const newEmployee = new Employee({
    Empcode,
    name,
    department,
    Gender,
    DOB,
    JoningDate,
    PrevExperiance,
    Salary,
    Address,
  });

  newEmployee.save()
  .then(() => res.json('Employee added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Employee.findById(req.params.id)
      .then(employee => res.json(employee))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id)
      .then(() => res.json('Employee deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/update/:id').post((req, res) => {
    Employee.findById(req.params.id)
      .then(employee => {
        employee.Empcode = req.body.Empcode;
        employee.name = req.body.name;
        employee.department = req.body.department;
        employee.Gender = req.body.Gender;
        employee.DOB = Date.parse(req.body.DOB);
        employee.JoningDate = Date.parse(req.body.JoningDate);
        employee.PrevExperiance = Number(req.body.PrevExperiance);
        employee.Salary = Number(req.body.Salary);
        employee.Address = req.body.Address;
  
        employee.save()
          .then(() => res.json('Employee updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;