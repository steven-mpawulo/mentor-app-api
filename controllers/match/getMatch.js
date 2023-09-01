const match = require('../../models/match');
const getMatch = async (req, res) => {
    const matchId = req.params.id;
    console.log(matchId);

    if (matchId !== null) {
await match.findById({'_id': matchId}).then((value) => {
    console.log(value);
    res.status(200).json({"message": "match found", "match": value});
}).catch((e) => {
    console.log(e);
    res.status(200).json({"message": "failed to fetch match"});
});
    } else {
        res.status(400).json({"message": "please provide match id"});
    }

}

module.exports = getMatch;