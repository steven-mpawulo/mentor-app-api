const mongoose = require('mongoose');
const chat = require('../../models/chat');
const message = require('../../models/message');
const updateChat = async (req, res) => {
    const mentorId = new mongoose.Types.ObjectId(req.params.id);
    const menteeId = new mongoose.Types.ObjectId(req.params.id2);
    const body = req.body;
    console.log(body);

    if (mentorId !== null && menteeId !== null) {
          let sender;
          let receiver;
        if (Object.keys(body).length !== 0) {
            if (body.sender === "mentor") {
                sender = mentorId;
                receiver = menteeId;
            } else if (body.sender === "mentee"){
                sender = menteeId;
                receiver = mentorId;
            } else {
                res.status(400).json({"message": "please provide sender value as mentor or mentee"});
            }
            const newMessage = message({
                message: body.message,
                sender: sender,
                receiver:receiver,
            });

            await newMessage.save().then( async (value) => {
                console.log(value);
                await chat.findOneAndUpdate({'between': [mentorId, menteeId]}, {$addToSet: {
                    "messages": value,
                }}, {new: true}).then((value) => {
                    console.log(value);
                    res.status(201).json({"message": "message added", "chat": value});
                    
                }).catch((e) => {
                    console.log(e);
                    res.status(400).json({"message": "failed to add message"});
                });
            }).catch((e) => {
                console.log(e);
                res.status(400).json({"message": "failed to save message"});
            });
        } else {
            res.status(400).json({"message": "please provide a message"});
        }

        
    } else {
        res.status(400).json({"message": "please provide mentor and mentee Ids"});
    }

}

module.exports = updateChat;