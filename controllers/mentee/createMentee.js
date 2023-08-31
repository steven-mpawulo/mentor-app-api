const mentee = require('../../models/mentee');
const user = require('../../models/user');
const createMentee = async (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    const body = req.body;
    console.log(body);
    const role = "MENTEE"

    if (userId !== null) {
        await user.findByIdAndUpdate({'_id': userId}, {$set: {"role": role}}, {new: true}).then(async (value) => {
            console.log(value);
            if (value !== null){
                const newMentee = mentee({
                    "firstName": body.firstName,
                    "lastName": body.lastName,
                    "email": body.email,
                    "skills": body.skills,
                    "userId": value._id,
                });

                await newMentee.save().then((value) => {
                    console.log(value);
                    res.status(201).json({"message": "mentee created successfully", "mentee": value});
                }).catch((e) => {
                    console.log(e);
                    res.status(400).json({"message": "failed to create mentee"});
                });
            } else {
                res.status(400).json({'message': "something went wrong"});
            }
        });
    
    }
}

module.exports = createMentee;