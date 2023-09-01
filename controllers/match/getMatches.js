const match = require('../../models/match')
const getMatches = async (req, res) => {
    await match.find({}).exec().then((value) => {
        console.log(value);
        res.status(200).json({"message": "matches found", "matches": value});
    }).catch((e) => {
        console.log(e);
        res.status(400).json({"message": "failed to fetch matches"});
    });
}

module.exports = getMatches;