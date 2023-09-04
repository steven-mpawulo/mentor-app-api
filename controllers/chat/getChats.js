const chat = require("../../models/chat")

const getChats = async (req, res) => {
    await chat.find({}).exec().then((value) => {
        console.log(value);
        if (value !== null) {
            res.status(200).json({"message": "successfully fetched all chats", "chats": value});
        } else {
            res.status(400).json({"message": "no chats found"});
        }

    }).catch((e) => {
        console.log(e);
        res.status(400).json({"message": "something went wrong"});
    });
}

module.exports = getChats;