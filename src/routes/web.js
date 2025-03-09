const express = require('express');
const router = express.Router();

const { getHomePage, getSample, getKhaidz } = require('../controllers/homeController');

// router.Method('route', callback)

// GET request to the root URL
router.get('/', getHomePage);
router.get('/sample', getSample);
router.get('/khaidz', getKhaidz);

module.exports = router; // export router object
