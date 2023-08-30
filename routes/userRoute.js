const express = require('express');
const user = require('../models/user');
const createUser = require('../controllers/user/createUser');
const userRoute = express.Router();


userRoute.post('/users', createUser);


module.exports = userRoute;