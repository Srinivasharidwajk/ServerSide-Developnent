const http = require('http');
const router = require('./router/apiRouter');

const hostName = '127.0.0.1';
const port = 5000;

/* https://developer.mozilla.org/en-US/docs/Web/HTTP/Status */
let server = http.createServer((request , response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type' , 'text/html');
    // routing logic
    router.mapRoutes(request, response);
});

server.listen(port, hostName, () => {
    console.log(`Node JS Server is started at http://${hostName}:${port}`);
});
