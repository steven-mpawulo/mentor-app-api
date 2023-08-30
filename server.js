const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.get('/', (req, res) => {
    res.json({"message": "welcome to my server"});
});

const port = process.env.PORT || 5001;
mongoose.connect(process.env.DB_URL).then((value) => {
    console.log("database connected");
    app.listen(port, () => {
        console.log("server started");
    });
}).catch((e) => {
console.log("database failed to connect");
});
