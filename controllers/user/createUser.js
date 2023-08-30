const createUser = async (req, res) => {
    const body = req.body;
    console.log(body);

    if(Object.keys(body).length !== 0) {
        if (body.firstName && body.lastName && body.email && body.password && body.role) {
            const User = new user({
                "firstName": body.firstName,
                "lastName": body.lastName,
                "email": body.email,
                "password": hashsedPassword,
                "role": body.role,

            });

            await User.save().then((value) => {
                console.log(value);
                res.status(201).json({"message": "user successfully created", "user": value});
            }).catch((e) => {
                res.status(400).json({"message": "something went wrong while creating user"});
            });

        } else {
            res.status(400).json({"message": "some value is missing"});
        }

    } else {
        res.status(400).json({"message": "please provide user data"});
    }
}

module.exports = createUser;