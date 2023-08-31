const express = require('express');
const createMentee = require('../controllers/mentee/createMentee');

const menteeRoute = express.Router();

menteeRoute.post('/mentees/:id', createMentee);

module.exports = menteeRoute;