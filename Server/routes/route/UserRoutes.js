const { response } = require("express");
const express = require("express");
const router = express.Router();


const {getAll, registerUser, getOne, deleteUser, updateUser, login} = require('../../controller/UserController')

// TO GET ALL USERS
router.get('/users', getAll);



//TO GET ONE USER
router.get('/:id',getOne);

// TO Login
router.post('/login', login);

//TO ADD NEW USER
router.post('/register', registerUser);

//TO DELETE THE USER BY USER_ID
router.delete('/delete/:id',deleteUser);

//TO UPDATE BY USER_ID
router.put('/:id', updateUser );

module.exports = router;
