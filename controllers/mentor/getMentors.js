const mentor = require("../../models/mentor")

const getMentors = async (req, res) => {
    await mentor.find({}).exec().then((value) => {
        console.log(value);
        res.status(200).json({"message": "mentors fetched successfully", "mentors": value});
    }).catch((e) => {
        console.log(e);
        res.status(400).json({"message": "failed to fetch mentors"});
    });
}

module.exports = getMentors;