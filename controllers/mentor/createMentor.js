const mentor = require("../../models/mentor");
const user = require("../../models/user");

const createMentor = async (req, res) => {
    const userId = req.params.id;
    const body = req.body;
    const role = "MENTOR";

    if (userId !== null) {
        if (Object.keys(body).length !== 0) {
            await user.findByIdAndUpdate({ '_id': userId }, { $set: { "role": role } }, { new: true }).then(async (value) => {
                console.log(value);
                const newMentor = new mentor({
                    "firstName": body.firstName,
                    "lastName": body.lastName,
                    "email": body.email,
                    "userId": value._id,
                    "expertise": body.expertise,
                });
                await newMentor.save().then((value) => {
                    console.log(value);
                    res.status(201).json({ "message": "mentor created successfully", "mentor": value });
                }).catch((e) => {
                    console.log(e);
                    res.status(400).json({ "message": "failed to create mentor" });
                });

            }).catch((e) => {
                console.log(e);
                res.status(400).json({ "message": "user not found" });
            });

        } else {
            res.status(400).json({ "message": "please provide mentor data" });
        }

    } else {
        res.status(400).json({ "message": "please provide user id" });
    }
}

module.exports = createMentor;