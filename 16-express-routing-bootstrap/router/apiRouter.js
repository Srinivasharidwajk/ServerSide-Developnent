const express = require('express');
const router = express.Router();
const path = require('path');

// home page
router.get('/', (request , response) => {
    response.sendFile(path.join(__dirname, '..' , 'views' , 'index.html'));
});

// about page
router.get('/about', (request , response) => {
    response.sendFile(path.join(__dirname, '..' , 'views' , 'about.html'));
});

// services page
router.get('/services', (request , response) => {
    response.sendFile(path.join(__dirname, '..' , 'views' , 'services.html'));
});

// contact page
router.get('/contact', (request , response) => {
    response.sendFile(path.join(__dirname, '..' , 'views' , 'contact.html'));
});


module.exports = router;

