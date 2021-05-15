const express = require('express');
const app = express();
const dotEnv = require('dotenv');
const path = require('path');

// configure dotEnv
dotEnv.config({path : './config/config.env'});

// configure static files path
app.use('/public', express.static('public'));

const hostname = process.env.EXPRESS_HOST_NAME;
const port = process.env.EXPRESS_PORT;

// configure router
app.use('/', require('./router/apiRouter'));

app.listen(port, hostname, () => {
    console.log(`Express Server is started at http://${hostname}:${port}`)
});
