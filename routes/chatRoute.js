const express = require('express');
const createChat = require('../controllers/chat/createChat');
const updateChat = require('../controllers/chat/updateChat');
const deleteChat = require('../controllers/chat/deleteChat');
const getChat = require('../controllers/chat/getChat');
const getChats = require('../controllers/chat/getChats');
const deleteMessage = require('../controllers/message/deleteMessage');
const updateMessage = require('../controllers/message/updateMessage');
const getMessage = require('../controllers/message/getMessage');

const chatRoute = express.Router();

chatRoute.post('/chats/:id/:id2', createChat);
chatRoute.put('/chats/:id/:id2', updateChat);
chatRoute.delete('/chats/:id', deleteChat);
chatRoute.get('/chats/:id', getChat);
chatRoute.get('/chats', getChats);
chatRoute.delete('/chats/:id/messages/:id2', deleteMessage);
chatRoute.put('/chats/:id/messages/:id2', updateMessage);
chatRoute.get('/chats/:id/messages/:id2', getMessage);


module.exports = chatRoute;