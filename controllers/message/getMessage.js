const chat = require("../../models/chat");

const getMessage = async (req, res) => {
    const chatId = req.params.id;
    console.log(chatId);
    const messageId = req.params.id2;
    console.log(messageId);

    if (chatId !== null && messageId !== null) {
        await chat.find({ '_id': chatId }, { 'messages': { $elemMatch: { '_id': messageId } } }).then((value) => { 
            console.log(value);
            if (value !== null) {
                res.status(200).json({"response": "message found", "message": value});
            }
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"response": "failed to retreive message"});
        })

    } else {
        res.status(400).json({ "message": "please provide message Id" });
    }
}

module.exports = getMessage;