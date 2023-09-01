const express = require('express');
const getMatched = require('../controllers/match/getMatched');

const matchRoute = express.Router();

matchRoute.post('/match/:id/:id2', getMatched);


module.exports = matchRoute;