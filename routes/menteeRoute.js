const express = require('express');
const createMentee = require('../controllers/mentee/createMentee');
const getMentees = require('../controllers/mentee/getMentees');
const getMentee = require('../controllers/mentee/getMentee');

const menteeRoute = express.Router();

menteeRoute.post('/mentees/:id', createMentee);
menteeRoute.get('/mentees', getMentees);
menteeRoute.get('/mentees/:id', getMentee);

module.exports = menteeRoute;