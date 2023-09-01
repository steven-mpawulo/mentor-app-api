const express = require('express');
const createChat = require('../controllers/chat/createChat');
const updateChat = require('../controllers/chat/updateChat');

const chatRoute = express.Router();

chatRoute.post('/chats/:id/:id2', createChat);
chatRoute.put('/chats/:id/:id2', updateChat);

module.exports = chatRoute;