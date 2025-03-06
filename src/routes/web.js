const express = require('express');
const router = express.Router();

// GET request to the root URL
router.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
});

router.get('/abc', (req, res) => {
    res.send('Hello, Khaidz hehe!')
});

router.get('/khaidz', (req, res) => {
    res.render('sample.ejs')
});

module.exports = router; // export router object