const mongoose = require('mongoose');

const menteeSchema = new mongoose.Schema({
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
    },
    skills: [],
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'mentorUser'
    },
    mentor: {
        type: mongoose.Types.ObjectId,
        ref: 'mentor',
    }

}, { timestamps: true });

module.exports = mongoose.model('mentee', menteeSchema);