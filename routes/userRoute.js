const express = require('express');
const userRoute = express.Router();


userRouter.post('/users', (req, res) => {
    res.json({"message": "user router works"})
});


module.exports = userRoute;