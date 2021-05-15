const http = require('http');
const fs = require('fs');
const path = require('path');

const hostName = '127.0.0.1';
const port = 5000;

/* https://developer.mozilla.org/en-US/docs/Web/HTTP/Status */
let server = http.createServer((request , response) => {
    let clientURL = request.url;
    console.log(clientURL);
    response.statusCode = 200;
    response.setHeader('Content-Type' , 'text/html');
    if(clientURL === '/'){
        fs.readFile(path.join(__dirname, 'index.html'), 'utf-8' , (err , data) => {
            if(err) throw err;
            response.end(data);
        });
    }
    else if(clientURL === '/about'){
        fs.readFile(path.join(__dirname, 'about.html'), 'utf-8' , (err , data) => {
            if(err) throw err;
            response.end(data);
        });
    }
    else if(clientURL === '/services'){
        fs.readFile(path.join(__dirname, 'services.html'), 'utf-8' , (err , data) => {
            if(err) throw err;
            response.end(data);
        });
    }
    else if(clientURL === '/contact'){
        fs.readFile(path.join(__dirname, 'contact.html'), 'utf-8' , (err , data) => {
            if(err) throw err;
            response.end(data);
        });
    }
    else{
        fs.readFile(path.join(__dirname, '404.html'), 'utf-8' , (err , data) => {
            if(err) throw err;
            response.end(data);
        });
    }
});

server.listen(port, hostName, () => {
    console.log(`Node JS Server is started at http://${hostName}:${port}`);
});
