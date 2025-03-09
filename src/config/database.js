const mysql = require('mysql2/promise'); // mysql module
const dotenv = require('dotenv'); // dotenv module

dotenv.config(); // configure dotenv
// create a connection to the database
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST || 'localhost',
//     port: process.env.DB_PORT || 3307,
//     user: process.env.DB_USER || 'root',
//     password: process.env.DB_PASS || '123456',
//     database: process.env.DB_NAME || 'kaka205'
// });

const connection = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3307,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    database: process.env.DB_NAME || 'kaka205',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = connection; // export the connection