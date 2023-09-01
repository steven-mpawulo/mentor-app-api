const mentee = require('../../models/mentee');
const updateMentee = async (req, res) => {
    const body = req.body;
    console.log(body);
    const menteeId = req.params.id;
    console.log(menteeId);

    if (menteeId !== null) {
        if (Object.keys(body).length !== 0) {
            await mentee.findByIdAndUpdate({'_id': menteeId}, {$set: {"firstName": body.firstName, "lastName": body.lastName,  "email": body.email, "skills": body.skills }}, {new: true}).then((value) => {
                console.log(value);
                res.status(201).json({"message": "mentee updated successfully", "mentee": value});
            }).catch((e) => {
                console.log(e);
                res.status(400).json({"message": "failed to update mentee"});
            });

        } else {
            res.status(400).json({"message": "please provide mentee data"});
        }

    } else {
        res.status(400).json({"message": "please provide mentee id"});
    }

}

module.exports = updateMentee;