const express = require('express');
const router = express.Router();

const { getHomePage, getCreateUserPage, getListUsersPage, } = require('../controllers/homeController');

// router.Method('route', callback)

// GET request to the root URL
router.get('/', getHomePage);
router.get('/list-users', getListUsersPage);
router.get('/create-user', getCreateUserPage);

module.exports = router; // export router object
