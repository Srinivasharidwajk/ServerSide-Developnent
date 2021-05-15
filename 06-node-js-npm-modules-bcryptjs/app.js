const bcrypt = require('bcryptjs');

// form data
let user = {
    username : 'rajan',
    email : 'rajan@gmail.com',
    password : 'rajan@123'
};

//encode the password
let salt = bcrypt.genSaltSync(10);
let hashedPassword = bcrypt.hashSync(user.password , salt);

let updatedUser = {
    ...user,
    password: hashedPassword
};
//console.log(updatedUser);

// decode the password
let isMatch = bcrypt.compareSync('Rajan@123' , updatedUser.password);
if(isMatch) {
    console.log('Logged In Successful');
}
else{
    console.log('Invalid Credentials');
}
