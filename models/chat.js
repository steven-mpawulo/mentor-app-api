const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    between: [],
    messages: [],

}, {timestamps: true});

module.exports = mongoose.model('chat', chatSchema);