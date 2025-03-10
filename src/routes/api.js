const express = require('express');
const router = express.Router();

const { createUser, updateUser, deleteUser } = require('../services/userService');

router.post('/create-user', createUser);
router.put('/update-user/:id', updateUser);
router.delete('/delete-user/:id', deleteUser);

module.exports = router; // export router object