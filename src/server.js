

require('dotenv').config() // dotenv module
// import express from 'express' // ES6
const express = require('express') // commonJS
const configViewEngine = require('./config/viewEngine') // commonJS

// import router
const webRouter = require('./routes/web') // commonJS

const app = express(); // app is an instance of express
const port = process.env.POST || 8080; // port number => hardcoded .uat, .dev, .prod
const hostname = process.env.HOST_NAME || 'localhost'; // hostname => hardcoded .uat, .dev, .prod

// console.log(">> check env: ", process.env)

// configure template engine
configViewEngine(app);

// declare route
app.use('/hihi', webRouter); // use webRouter for all routes

// GET request to the /about URL
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});