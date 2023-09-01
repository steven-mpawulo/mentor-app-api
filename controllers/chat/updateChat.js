const mongoose = require('mongoose');
const chat = require('../../models/chat');
const updateChat = async (req, res) => {
    const mentorId = mongoose.Types.ObjectId(req.params.id);
    const menteeId = mongoose.Types.ObjectId(req.params.id2);
    const body = req.body;
    console.log(body);

    if (mentorId !== null && menteeId !== null) {

        if (Object.keys(body).length !== 0) {
            await chat.findOneAndUpdate({'between': [mentorId, menteeId]}, {$addToSet: {
                "messages": message,
            }}, {new: true}).then((value) => {
                console.log(value);
                res.status(201).json({"message": "message added"});
                
            }).catch((e) => {
                console.log(e);
                res.status(400).json({"message": "failed to add message"});
            });

        } else {
            res.status(400).json({"message": "please provide a message"});
        }

        
    } else {
        res.status(400).json({"message": "please provide mentor and mentee Ids"});
    }

}

module.exports = updateChat;