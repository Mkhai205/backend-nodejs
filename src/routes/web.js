const express = require('express');
const router = express.Router();

const { getHomePage, getForm, postCreateUser, getListUsers } = require('../controllers/homeController');

// router.Method('route', callback)

// GET request to the root URL
router.get('/', getHomePage);
router.get('/list-users', getListUsers);
router.get('/create-user', getForm);
router.post('/create-user', postCreateUser);

module.exports = router; // export router object
