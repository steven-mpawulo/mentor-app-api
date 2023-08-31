const mentee = require("../../models/mentee")

const getMentees = async (req, res) => {
    await mentee.find({}).exec().then((value) => {
        console.log(value)
        res.status(200).json({"message": "successfully fetched mentees", "mentees": value});
    }).catch((e) => {
        console.log(e);
        res.status(400).json({"message": "failed to fetch mentees"});
    });
}

module.exports = getMentees;