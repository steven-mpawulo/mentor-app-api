const user = require("../../models/user")

const deleteUser = async (req, res) => {
    const userId = req.params.id;
    console.log(userId);

    if (userId !== null) { 
        await user.findByIdAndDelete({ '_id': userId}).then((value) => {
            console.log(value);
            if(value !== null) {
                res.status(200).json({"message": "user deleted", "user": value});
            } else {
                res.status(400).json({"message": "user already deleted"});
            }
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "failed to delete user"});
        })
    } else {
        res.status(400).json({ "message": "please provide user id" });
    }

}

module.exports = deleteUser;