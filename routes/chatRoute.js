const express = require('express');
const createChat = require('../controllers/chat/createChat');

const chatRoute = express.Router();

chatRoute.post('/chats/:id/:id2', createChat);

module.exports = chatRoute;