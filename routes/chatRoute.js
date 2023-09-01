const express = require('express');
const createChat = require('../controllers/chat/createChat');

const chatRoute = express.Router();

chatRoute.post('/chats', createChat);