const chat = require("../../models/chat");
const mongoose = require('mongoose');

const deleteMessage = async (req, res) => {
    const chatId = req.params.id;
    console.log(chatId);
    const messageId = new mongoose.Types.ObjectId(req.params.id2);
    console.log(messageId);

    if (chatId !== null && messageId !== null) {
        await chat.findByIdAndUpdate({'_id': chatId}, {$pull: {'messages': {"_id": messageId}}}, {new: true}).then((value) => {
            console.log(value);
            if (value !== null) {
                res.status(200).json({"message": "message deleted", "message": value});
            } else {
                res.status(400).json({"message": "message already deleted"});
            }
            

        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "failed to delete message"});
        });

    } else {
        res.status(400).json({"message": "please provide message and chat id"});
    }
}

module.exports = deleteMessage;