const chat = require("../../models/chat");

const deleteChat = async (req, res) => {
    const chatId = req.params.id;
    console.log(chatId);

    if (chatId !== null) {
        await chat.findByIdAndDelete({ '_id': chatId }).exec().then((value) => {
            console.log(value);
            if (value !== null) {
                res.status(200).json({ "message": "chat deleted", "chat": value });
            } else {
                res.status(400).json({ "message": "chat already deleted" });
            }

        }).catch((e) => {
            console.log(e);
            res.status(400).json({ "message": "failed to delete chat" });

        });
    }
}

module.exports = deleteChat;