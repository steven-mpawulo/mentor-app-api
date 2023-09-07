const mongoose = require('mongoose');
const chat = require('../../models/chat');
const updateMessage = async (req, res) =>  {
const chatId = req.params.id;
console.log(chatId);
const messageId = new mongoose.Types.ObjectId(req.params.id2);
console.log(messageId);
const body = req.body;
console.log(body);

if (chatId !== null && messageId !== null) {
    if (body !== null) {
        await chat.findByIdAndUpdate({'_id': chatId, 'messages': messageId}, {$set: {"messages.$": body.message }}, {new: true} ).then((value) => {
            console.log(value);
            res.status(201).json({"message": "message in chat updated", "messages": value});
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "failed to update message"});
        });
    } else {
        res.status(400).json({"message": "please provide a message"});
    }
    
} else {
    res.status(400).json({"message": "please provide chat and message id"});
}
}

module.exports = updateMessage;