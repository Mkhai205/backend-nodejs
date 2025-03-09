

require('dotenv').config(); // dotenv module
const express = require('express'); // import express
const configViewEngine = require('./config/viewEngine'); // import view engine
const webRouter = require('./routes/web'); // import router
const connection = require('./config/database'); // import connection

const app = express(); // app is an instance of express
const port = process.env.POST || 8080; // port number => hardcoded .uat, .dev, .prod
const hostname = process.env.HOST_NAME || 'localhost'; // hostname => hardcoded .uat, .dev, .prod

// console.log(">> check env: ", process.env)

// configure template engine
configViewEngine(app);

// declare route
app.use('/', webRouter); // use webRouter for all routes

connection.query('SELECT * FROM User', (error, results, fields) => {
    if (error) throw error;
    console.log('The solution is: ', results);
    // console.log('The fields is: ', fields);

});

// GET request to the /about URL
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});