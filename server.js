const { createServer } = require('node:http'); // node.js

const hostname = '127.0.0.1'; // localhost
const port = 5555; // port number between 1024 and 49151

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

