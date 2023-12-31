const express = require('express');
const createMentee = require('../controllers/mentee/createMentee');
const getMentees = require('../controllers/mentee/getMentees');
const getMentee = require('../controllers/mentee/getMentee');
const deleteMentee = require('../controllers/mentee/deleteMentee');
const updateMentee = require('../controllers/mentee/updateMentee');

const menteeRoute = express.Router();

menteeRoute.post('/mentees/:id', createMentee);
menteeRoute.get('/mentees', getMentees);
menteeRoute.get('/mentees/:id', getMentee);
menteeRoute.delete('/mentees/:id', deleteMentee);
menteeRoute.put('/mentees/:id', updateMentee);

module.exports = menteeRoute;