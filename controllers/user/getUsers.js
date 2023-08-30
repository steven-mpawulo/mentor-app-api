const user = require("../../models/user")

const getUsers = async (req, res) => {
    await user.find({}).exec().then((value) => {
        console.log(value);
        res.status(200).json({"message": "fetched all users", "users": value});
    }).catch((e) => {
        console.log(e);
        res.status(400).json({"message": "failed to fetch all users"});
    });

}

module.exports = getUsers;