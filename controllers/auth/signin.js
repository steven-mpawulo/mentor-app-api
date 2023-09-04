const user = require("../../models/user");
const bcrypt = require('bcrypt');

const signin = async (req, res) => {
    const body = req.body;
    console.log(body);

    if(Object.keys(body).length !== 0) {
        if (body.email && body.password) {
            await user.findOne({"email": body.email}).exec().then(async (value) => {
                console.log(value);
                if (value !== null) {
                    const confirmPassword = await bcrypt.compare(body.password, value.password);
                    if (confirmPassword) {
                        res.status(200).json({"message": "login successful"});
                    } else {
                        res.status(400).json({"message": "failed to login user"});
                    }

                } else {
                    res.status(400).json({"message": "user not found"});
                }
            }).catch((e) => {
                console.log(e);
            });
        } else {
            res.status(400).json({"message": "please provide login credentials"})
        }
    } else {
        res.status(400).json({"message": "please provide login data"});
    }

}

module.exports = signin;