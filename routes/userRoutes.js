const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUserById, updateUserById, deleteUserById } = require('../controllers/userController');

router.post('/', createUser);

router.get('/', getUsers);

router.get('/:id', getUserById);

router.put('/:id', updateUserById);

router.delete('/:id', deleteUserById);

module.exports = router;