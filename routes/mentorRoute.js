const express = require('express');
const createMentor = require('../controllers/mentor/createMentor');
const getMentors = require('../controllers/mentor/getMentors');
const getMentor = require('../controllers/mentor/getMentor');
const deleteMentor = require('../controllers/mentor/deleteMentor');
const updateMentor = require('../controllers/mentor/updateMentor');
const mentorRoute = express.Router();

mentorRoute.post('/mentors/:id', createMentor);
mentorRoute.get('/mentors', getMentors);
mentorRoute.get('/mentors/:id', getMentor);
mentorRoute.delete('/mentors/:id', deleteMentor);
mentorRoute.put('/mentors/:id', updateMentor);


module.exports = mentorRoute;