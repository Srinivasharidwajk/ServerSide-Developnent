const gravatar = require('gravatar');

// user
let user = {
    name : 'Naveen',
    email : 'rajan@gmail.com',
    password : 'naveen123'
};

// get the gravatar image of email
let userImage = gravatar.url(user.email, {
    s : '200',
    r : 'G',
    d : 'mm'
});

let updatedUser = {
    ...user,
    image : userImage
};
console.log(updatedUser);
