const express = require('express');
const getMatched = require('../controllers/match/getMatched');
const getMatches = require('../controllers/match/getMatches');

const matchRoute = express.Router();

matchRoute.post('/match/:id/:id2', getMatched);
matchRoute.get('/match', getMatches);


module.exports = matchRoute;