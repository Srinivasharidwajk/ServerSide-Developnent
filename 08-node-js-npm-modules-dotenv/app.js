const dotEnv = require('dotenv');

// configure the dotEnv
dotEnv.config({path : './config/config.env'});

// JWT Web Token
let jwtSecretKey = process.env.JWT_SECRET_KEY;
console.log(jwtSecretKey);

// mongodb local URL
let url = process.env.MONGODB_LOCAL_URL;
console.log(url);
