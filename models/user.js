const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }, 
    role: {
        type: String,
        enum: ["MENTOR", "MENTEE", "ADMIN"],
        default: "MENTEE",
        required: true,

    },
}, {timestamps: true});

module.exports = mongoose.model('mentorUser', userSchema);