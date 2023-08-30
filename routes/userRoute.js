const express = require('express');
const userRouter = express.Router();


userRouter.post('/users', (req, res) => {
    res.json({"message": "user router works"})
});