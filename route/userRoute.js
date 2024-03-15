

const express = require('express');//import express
const { register } = require('../controller/UserController');
const router = express.Router();
const {login} = require('../controller/authController')




router.post('/register',register)
router.post('/login', login)


module.exports = router