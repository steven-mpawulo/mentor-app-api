const express = require('express');
const getMatched = require('../controllers/match/getMatched');

const matchRoute = express.Router();

matchRoute.post('/match', getMatched);


module.exports = matchRoute;