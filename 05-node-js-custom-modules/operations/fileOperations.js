const fs = require('fs');
const path = require('path');

let writeToFile = (filename , data) => {
    fs.writeFile(path.join(__dirname, filename) , data,'utf-8', (err) => {
        if(err) throw err;
        console.log('data is written to a file');
    });
};
module.exports = {
    writeToFile
};
