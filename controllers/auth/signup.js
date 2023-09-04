const bcrypt = require('bcrypt');
const user = require('../../models/user');
const signup = async (req, res) => {
    const body = req.body;
    console.log(body);

    if (Object.keys(body).length !== 0) {
        if (body.firstName && body.lastName && body.email && body.password) {
            const hashedPassword = await bcrypt.hash(body.password, 10);
            const newUser = user({
                "firstName": body.firstName,
                "lastName": body.lastName,
                "password": hashedPassword,
                "email": body.email,
            });

            await newUser.save().then((value) => {
                console.log(value);
                res.status(201).json({"message": "sign up successful", "user": value});

            }).catch((e) => {
                console.log(e);
                res.status(400).json({"message": "failed to sign up user"});

            });


        } else {
            res.status(400).json({"message": "please provide some data "});
        }

    }

}

module.exports = signup;