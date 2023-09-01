const match = require('../../models/match');
const deleteMatch = async (req, res) => {
    const matchId = req.params.id;
    console.log(matchId);

    if (matchId !== null) {
        await match.findByIdAndDelete({'_id': matchId}).exec().then((value) => {
            console.log(value);
            if (value !== null) {
                res.status(200).json({"message": "match deleted"});
            } else {
                res.status(400).json({"message": "match already deleted"});
            }
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "failed to delete match"});
        })

    } else {
        res.status(400).json({"message": "failed to delete match"});
    }

}

module.exports = deleteMatch;
