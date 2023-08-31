const mentee = require("../../models/mentee");

const getMentee = async (req, res) => {
    const menteeId = req.params.id;
    console.log(menteeId);

    if(menteeId !== null){
        await mentee.findById({'_id': menteeId}).then((value) => {
            console.log(value);
            res.status(200).json({"message": "mentee found", "mentee": value});
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "failed to fetch mentee"});
        });

    } else {
        res.status(400).json({"message": "please provide mentee id"})
    }
}

module.exports = getMentee;