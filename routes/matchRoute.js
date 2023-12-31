const express = require('express');
const getMatched = require('../controllers/match/getMatched');
const getMatches = require('../controllers/match/getMatches');
const getMatch = require('../controllers/match/getMatch');
const deleteMatch = require('../controllers/match/deleteMatch');

const matchRoute = express.Router();

matchRoute.post('/match/:id/:id2', getMatched);
matchRoute.get('/match', getMatches);
matchRoute.get('/match/:id', getMatch);
matchRoute.delete('/match/:id', deleteMatch);


module.exports = matchRoute;