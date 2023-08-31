const express = require('express');
const createMentor = require('../controllers/mentor/createMentor');
const getMentors = require('../controllers/mentor/getMentors');
const getMentor = require('../controllers/mentor/getMentor');
const mentorRoute = express.Router();

mentorRoute.post('/mentors/:id', createMentor);
mentorRoute.get('/mentors', getMentors);
mentorRoute.get('/mentors/:id', getMentor);


module.exports = mentorRoute;