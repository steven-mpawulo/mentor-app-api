const express = require('express');
const createMentor = require('../controllers/mentor/createMentor');
const mentorRoute = express.Router();

mentorRoute.post('/mentors/:id', createMentor);