const express = require('express');
const user = require('../models/user');
const createUser = require('../controllers/user/createUser');
const getUsers = require('../controllers/user/getUsers');
const getUser = require('../controllers/user/getUser');
const deleteUser = require('../controllers/user/deleteUser');
const userRoute = express.Router();


userRoute.post('/users', createUser);
userRoute.get('/users', getUsers);
userRoute.get('/users/:id', getUser);
userRoute.delete('/users/:id', deleteUser);


module.exports = userRoute;