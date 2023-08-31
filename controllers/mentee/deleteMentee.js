const mentee = require('../../models/mentee')
const deleteMentee = async (req, res) => {
    const menteeId = req.params.id;
    console.log(menteeId);

    if (menteeId !== null){
        await mentee.findByIdAndDelete({'_id': menteeId}).exec().then((value) => {
            console.log(value);
            if (value !== null) {
                res.status(200).json({"message": "mentee deleted", "mentee": value});
            } else {
                res.status(400).json({"message": "mentee already deleted"});
            }
            
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "failed to delete mentee"});
        });

    } else {
        res.status(400).json({"message": "please provide mentee id"});
    }
}

module.exports = deleteMentee;