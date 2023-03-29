const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config');
const loginController = require('../controllers/loginController');

const router = express.Router();

router.post('/login', loginController.login);

module.exports = router;
