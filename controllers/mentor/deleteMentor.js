const mentor = require("../../models/mentor");

const deleteMentor = async (req, res) => {
    const mentorId = req.params.id;
    console.log(mentorId);

    if(mentorId !== null) {
        await mentor.findByIdAndDelete({'_id': mentorId}).then((value) => {
            console.log(value);
            if(value !== null) {
                res.status(200).json({"message": "mentor deleted", "mentor": value});
            } else {
                res.status(400).json({"message": "mentor already deleted"});
            }
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "failed to delete mentor"});
        })
    }

}

module.exports = deleteMentor;