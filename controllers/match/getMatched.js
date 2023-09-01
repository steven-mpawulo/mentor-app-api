const match = require("../../models/match");
const mentee = require("../../models/mentee");
const mentor = require("../../models/mentor");

const getMatched = async (req, res) => {
    const mentorId = req.params.id;
    console.log(mentorId);
    const menteeId = req.params.id2;
    console.log(menteeId);

    if (mentorId !== null && menteeId !== null) {
        const match = new match({
            between: [mentorId, menteeId],
        });

        await match.save().then(async (value) => {
            console.log(value);
            await mentor.findByIdAndUpdate({'_id': mentorId}, {$addToSet: {"mentees": menteeId}}).exec().then(async (value) => {
                console.log(value);
                await mentee.findByIdAndUpdate({'_id': menteeId}, {$set: {"mentor": mentorId}}).then((value) => {
                    console.log(value);
                }).catch((e) => {
                    console.log(e);
                    res.status(400).json({"message": "failed to update mentee"});
                });
            }).catch((e) => {
                console.log(e);
                res.status(400).json({"message": "failed to update mentor"});
            });
            res.status(200).json({"message": "match created", "match": value});
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "failed to create match"});
        })

    } else {
        res.status(400).json({"message": "please provide mentor and mentee id"});
    }
}

module.exports = getMatched;