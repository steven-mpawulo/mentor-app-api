const user = require("../../models/user");

const updateUser = async (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    const body = req.body;
    console.log(body);

    if (userId !== null) {
        if (Object.keys(body).length !== 0) {
            await user.findByIdAndUpdate({ '_id': userId }, { $set: { "firstName": body.firstName, "lastName": body.lastName, "email": body.email } }, {new: true}).exec().then((value) => {
                console.log(value);
                res.status(201).json({ "message": "user information updated", "user": value });
            }).catch((e) => {
                console.log(e);
                res.status(400).json({ "message": "failed to update user" });
            })

        } else {
            res.status(400).json({ "message": "please provide user data" });
        }
    } else {
        res.status(400).json({ "message": "please provide a user id" });
    }

}

module.exports = updateUser;