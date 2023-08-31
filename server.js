const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const mentorRoute = require('./routes/mentorRoute');
const menteeRoute = require('./routes/menteeRoute');
require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({"message": "welcome to my server"});
});

app.use('/api/v1', userRoute, mentorRoute, menteeRoute);



const port = process.env.PORT || 5001;
mongoose.connect(process.env.DB_URL).then((value) => {
    console.log("database connected");
    app.listen(port, () => {
        console.log("server started");
    });
}).catch((e) => {
console.log("database failed to connect");
});
