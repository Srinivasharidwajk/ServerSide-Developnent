const express = require('express'); // import express module
const app = express(); // initialize express js
const path = require('path');
const dotEnv = require('dotenv');

// configure dotEnv
dotEnv.config({path : './config/config.env'});

// configure static files path
app.use('/public', express.static('public'));

const hostname = process.env.EXPRESS_HOST_NAME;
const port = process.env.EXPRESS_PORT;

// for a html tag
app.get('/', (request , response) => {
    response.send(`<h2>Welcome to Express JS</h2>`);
});

// complete html page as response
app.get('/home', (request , response) => {
    response.sendFile(path.join(__dirname , 'index.html'));
});

// a json data as response
let user = {
    "login": "thenaveensaggam",
    "id": 25869485,
    "node_id": "MDQ6VXNlcjI1ODY5NDg1",
    "avatar_url": "https://avatars2.githubusercontent.com/u/25869485?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/thenaveensaggam",
    "html_url": "https://github.com/thenaveensaggam",
    "followers_url": "https://api.github.com/users/thenaveensaggam/followers",
    "following_url": "https://api.github.com/users/thenaveensaggam/following{/other_user}",
    "gists_url": "https://api.github.com/users/thenaveensaggam/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/thenaveensaggam/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/thenaveensaggam/subscriptions",
    "organizations_url": "https://api.github.com/users/thenaveensaggam/orgs",
    "repos_url": "https://api.github.com/users/thenaveensaggam/repos",
    "events_url": "https://api.github.com/users/thenaveensaggam/events{/privacy}",
    "received_events_url": "https://api.github.com/users/thenaveensaggam/received_events",
    "type": "User",
    "site_admin": false,
    "name": "NAVEEN SAGGAM",
    "company": "https://www.youtube.com/c/uibrains",
    "blog": "https://t.me/joinchat/H3ErUQ91InUKU50o1EIwCg",
    "location": "Hyderabad",
    "email": null,
    "hireable": null,
    "bio": "Enthusiastic Web Developer , Trainer and Blogger ",
    "twitter_username": null,
    "public_repos": 20,
    "public_gists": 72,
    "followers": 1749,
    "following": 1,
    "created_at": "2017-02-18T18:44:26Z",
    "updated_at": "2020-08-06T00:39:54Z"
};
app.get('/user' , (request , response) => {
    response.json(user);
});

// for download a file from express server
app.get('/download', (request , response) => {
    response.download(path.join(__dirname, 'angular.pptx'));
});

app.listen(port , hostname, () => {
    console.log(`Express Server is started at http://${hostname}:${port}`);
});
