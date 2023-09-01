const chat = require("../../models/chat");
const match = require("../../models/match");
const mongoose = require('mongoose');

const createChat = async (req, res) => {
    const mentorId = new mongoose.Types.ObjectId(req.params.id);
    console.log(mentorId);
    const menteeId = new mongoose.Types.ObjectId(req.params.id2);
    console.log(menteeId);

    if (mentorId !== null && menteeId !== null) {
        await chat.findOne({ 'between': [mentorId, menteeId] }).exec().then(async (value) => {
            console.log(value);
            if (value === null) {

                await match.findOne({ 'between': [mentorId, menteeId] }).then(async (value) => {
                    if(value !== null) {
                        console.log(value);

                        const newChat = chat({
                            between: [mentorId, menteeId],
                        });

                        await newChat.save().then((value) => {
                            console.log(value);
                            res.status(201).json({"message": "chat created", "chat": value});
                        }).catch((e) => {
                            console.log(e);
                            res.status(400).json({"message": "failed to create chat"});
                        });

                    } else {
                        res.status(400).json({'message': "please first match with mentor or mentee"});
                    }
                 }).catch((e) => { 
                    console.log(e);
                    res.status(400).json({"message": "failed to find match"});
                 });

            } else {
                res.status(400).json({ "message": "chat already exists" });
            }
        }).catch((e) => { 
            console.log(e);
            res.status(400).json({"message": "failed to create chat"});
        });

    } else {
        res.status(400).json({ "message": "please provide mentor and mentee id" })
    }

}

module.exports = createChat;