const user = require("../../models/user");

const getUser = async (req, res) => {
    const userId = req.params.id;
    console.log(userId);

    if (userId !== null) {
        await user.findById({'_id': userId}).exec().then((value) => {
            console.log(value);
            res.status(200).json({"message": "user fetched", "user": value});

        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "failed to fetch user"});
        })

    } else {
        res.status(400).json({"message": "please provide user id"});
    }
}

module.exports = getUser;