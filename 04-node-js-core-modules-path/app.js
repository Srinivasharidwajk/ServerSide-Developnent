const fs  = require('fs');
const path = require('path');

// dir name
console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, 'admin' , 'users' , 'users.json'));

// ./admin/users/users.json
fs.readFile(path.join(__dirname, 'admin' , 'users' , 'users.json'), 'utf-8', (err , data) => {
    if(err) throw err;
    let employees = JSON.parse(data);
    fs.writeFile(path.join(__dirname, 'data' , 'employees' , 'employees.json'), JSON.stringify(employees), 'utf-8' , (err) => {
        if(err) throw err;
        console.log('data is written to a file');
    })
});



