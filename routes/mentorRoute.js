const express = require('express');
const createMentor = require('../controllers/mentor/createMentor');
const getMentors = require('../controllers/mentor/getMentors');
const mentorRoute = express.Router();

mentorRoute.post('/mentors/:id', createMentor);
mentorRoute.get('/mentors', getMentors);


module.exports = mentorRoute;