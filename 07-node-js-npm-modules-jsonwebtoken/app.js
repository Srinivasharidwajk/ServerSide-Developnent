const jwt = require('jsonwebtoken');
/*
 1) jwt.sign(); // -> to create a token
 2) jwt.verify() // -> verify the token
 */

let user = {
    id : '5f6344e8c8fe3d2f007a3280',
    name : 'Rajan',
    email : 'rajan@gmail.com',
    password : 'rajan@123'
};

// create & send the token to client
// payload & secret key
let payload = {
    loginUser : {
        id : user.id,
        name : user.name
    }
};
let secretKey = 'ssshhhh';

let token = jwt.sign(payload , secretKey , { expiresIn : 3000000});
console.log(token);


// verify the token
jwt.verify(token, secretKey, (err, decodedToken) => {
    if(err) throw err;
    console.log(decodedToken);
});
