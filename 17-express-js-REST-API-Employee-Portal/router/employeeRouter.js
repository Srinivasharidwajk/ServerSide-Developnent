const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const path = require('path');
const fs = require('fs');

// GET all Employees
router.get('/', (request , response) => {
    fs.readFile(path.join(__dirname, '..' , 'data' , 'employees.json'), 'utf-8' , (err , data) => {
        if(err) throw err;
        let employees = JSON.parse(data);
        response.status(200).json(employees);
    });
});

// GET a Single employees
router.get('/:id', (request , response) => {
    let employeeId = request.params.id;
    fs.readFile(path.join(__dirname, '..' , 'data' , 'employees.json'), 'utf-8' , (err , data) => {
        if(err) throw err;
        let employeeList = JSON.parse(data);
        let selectedEmployee = employeeList.find(employee => employee.id === employeeId );
        if(selectedEmployee){
            response.status(200).json(selectedEmployee)
        }
        else{
            response.status(404).json({msg : 'employee not found Dude'});
        }
    });
});

// CREATE an Single employee
router.post('/', (request , response) => {
    let newEmployee = {
      id : uuid.v4(),
      first_name : request.body.first_name,
      last_name : request.body.last_name,
      email : request.body.email,
      ip_address : request.body.ip_address,
      gender : request.body.gender,
      city : request.body.city
    };
    fs.readFile(path.join(__dirname, '..' , 'data' , 'employees.json'), 'utf-8' , (err , data) => {
        if(err) throw err;
        let employees = JSON.parse(data);
        employees.push(newEmployee);
        fs.writeFile(path.join(__dirname, '..' , 'data' , 'employees.json'), JSON.stringify(employees) , 'utf-8', (err) => {
            if(err) throw err;
            response.status(200).json({
                result : 'Employee Created',
                data : newEmployee
            });
        });
    });
});

// UPDATE an Single employee
router.put('/:id', (request , response) => {
    let employeeID = request.params.id;
    let updatedEmployee = {
        id : employeeID,
        first_name : request.body.first_name,
        last_name : request.body.last_name,
        email : request.body.email,
        ip_address : request.body.ip_address,
        gender : request.body.gender,
        city : request.body.city
    };
    fs.readFile(path.join(__dirname, '..' , 'data' , 'employees.json'), 'utf-8' , (err , data) => {
        if(err) throw err;
        let employeeList = JSON.parse(data);
        let index = employeeList.map(employee => employee.id).indexOf(employeeID);
        employeeList.splice(index, 1, updatedEmployee); // update array with updated employee
        fs.writeFile(path.join(__dirname, '..' , 'data' , 'employees.json'), JSON.stringify(employeeList) , 'utf-8', (err) => {
            if(err) throw err;
            response.json({
                result : 'Employee is Updated',
                employees : updatedEmployee
            });
        });
    });
});

// DELETE an employee
router.delete('/:id', (request , response) => {
    let employeeID = request.params.id;
    fs.readFile(path.join(__dirname, '..' , 'data' , 'employees.json'), 'utf-8' , (err , data) => {
        if(err) throw err;
        let employeeList = JSON.parse(data);
        let index = employeeList.map(employee => employee.id).indexOf(employeeID);
        employeeList.splice(index, 1); // delete an object from Array
        fs.writeFile(path.join(__dirname, '..' , 'data' , 'employees.json'), JSON.stringify(employeeList) , 'utf-8', (err) => {
            if(err) throw err;
            response.json({
                result : 'Employee is Deleted',
                employeeId : employeeID
            });
        });
    });
});

module.exports = router;
