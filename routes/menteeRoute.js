const express = require('express');
const createMentee = require('../controllers/mentee/createMentee');
const getMentees = require('../controllers/mentee/getMentees');

const menteeRoute = express.Router();

menteeRoute.post('/mentees/:id', createMentee);
menteeRoute.get('/mentees', getMentees);

module.exports = menteeRoute;