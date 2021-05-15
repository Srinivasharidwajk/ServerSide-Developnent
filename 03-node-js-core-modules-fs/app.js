// import the fs module
const fs = require('fs');

// sync way READ / WRITE(CREATE)
/*let fileContent = fs.readFileSync('./data.txt', 'utf-8');
console.log(fileContent);

let newFileContent = `This Describes about Javascript : -> ${fileContent}`;
fs.writeFileSync('./message.txt', newFileContent , 'utf-8');
console.log('data is written to a file');*/

// Async way for READ / WRITE operations
fs.readFile('./data.txt', 'utf-8', (err , data) => {
    if(err) throw  err;
    fs.writeFile('./notes.txt', data, 'utf-8' , (err) => {
        if(err) throw err;
        console.log('data is written to a file');
    });
});
console.log('File System Example');

// array with JSON files
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
fs.writeFile('./employees.json', JSON.stringify(employees), 'utf-8' , (err) => {
    if(err) throw err;
    console.log('data is written to a json file');
});

fs.readFile('./employees.json', 'utf-8', (err , data) => {
   if(err) throw err;
   let employees = JSON.parse(data);
   console.log(employees);
});
