const mentor = require("../../models/mentor");

const getMentor = async (req, res) => {
    const mentorId = req.params.id;
    console.log(mentorId);

    if(mentorId !== null) {
        await mentor.findById({'_id': mentorId}).then((value) => {
            console.log(value);
            res.status(200).json({"message": "mentor found", "mentor": value});
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "failed to fetch mentor"});
        });

    } else {
        res.status(400).json({"message": "please provide mentor id"});
    }

}

module.exports = getMentor;