const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.get('/', (req, res) => {
    res.json({"message": "welcome to my server"});
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log("server started");
});