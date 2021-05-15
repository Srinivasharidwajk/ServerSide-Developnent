// variable declarations
let moduleName = 'Server Side Web Development';
console.log(moduleName);

// object creation
let student = {
    name : 'Rajan',
    age : 22,
    course : 'BTech',
    college : 'CBIT'
};
console.table(student);

// array creation
let technologies = ['html' , 'css' , 'javascript' , 'bootstrap' , 'jquery' , 'node js'];
console.table(technologies);

// function creation
let greet = (name , age) => {
    let msg = `Hello! ${name} You are ${age} yrs Old!`;
    console.log(msg);
};
greet('John', 45);

// Employees
let employees = [
    {
        sno : 101,
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        isActive : true
    },
    {
        sno : 102,
        name : 'Wilson',
        age : 55,
        designation : 'Director',
        isActive : true
    },
    {
        sno : 103,
        name : 'John',
        age : 45,
        designation : 'Project Manager',
        isActive : false
    },
    {
        sno : 104,
        name : 'Mahesh',
        age : 35,
        designation : 'Team Lead',
        isActive : false
    }
];
console.log(employees[0]);

// loop an array
let juniorEmployees = employees.filter(employee => employee.age <= 35);
console.table(juniorEmployees);
