const chat = require("../../models/chat");

const getChat = async (req, res) => {
    const chatId = req.params.id;
    console.log(chatId);

    if (chatId !== null) {
        await chat.findById({'_id': chatId}).exec().then((value) => {
            console.log(value);
            if (value !== null) {
                res.status(200).json({"message": "successfully fetched chat", "chat": value});
            } else {
                res.status(400).json({"message": "failed to retreive chat"});
            }
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "something went wrong"});
        });
    }
}