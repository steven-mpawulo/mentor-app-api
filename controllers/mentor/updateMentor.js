const mentor = require("../../models/mentor");

const updateMentor = async (req, res) => {
    const mentorId = req.params.id;
    console.log(mentorId);
    const body = req.body;
    console.log(body);

    if (mentorId !== null) {
        if (Object.keys(body).length !== null) {
            await mentor.findByIdAndUpdate({ '_id': mentorId }, { $set: { "firstName": body.firstName, "lastName": body.lastName, "email": body.email, "expertise": body.expertise, "experience": body.experience } }).then((value) => {
                console.log(value);
                res.status(201).json({"message": "mentor updated"});

             }).catch((e) => {
                console.log(e);
                res.status(400).json({"message": "failed to update mentor"});
             });

        } else {
            res.status(400).json({ "message": "please provide mentor data" });
        }

    } else {
        res.status(400).json({ "message": "please provide mentor id" });
    }

}

module.exports = updateMentor;