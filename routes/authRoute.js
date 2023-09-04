const express = require('express');
const signup = require('../controllers/auth/signup');
const signin = require('../controllers/auth/signin');

const authRoute = express.Router();

authRoute.post('/signup', signup);
authRoute.post('/signin', signin);

module.exports = authRoute;