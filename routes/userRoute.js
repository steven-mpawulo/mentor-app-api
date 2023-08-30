const express = require('express');
const userRoute = express.Router();


userRoute.post('/users', (req, res) => {
    res.json({"message": "user router works"})
});


module.exports = userRoute;