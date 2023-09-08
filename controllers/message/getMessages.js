const chat = require("../../models/chat");

const getMessages = async (req, res) => {
    const chatId = req.params.id;
    console.log(chatId);

    if (chatId !== null) {
        await chat.find({ '_id': chatId }, { fields: { 'messages': 1 } }).then((value) => {
            console.log(value);
            res.status(200).json({ "response": "messages fetched" });

        }).catch((e) => { 
            console.log(e);
            res.status(400).json({"message": "failed to fetch messages"});
        });
    } else {
        res.status(400).json({ "message": "please provide chat id" });
    }
}

module.exports = getMessages;