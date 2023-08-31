const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'mentorUser'
    },
    expertise: [],
    
});

module.exports = mongoose.model('mentor', mentorSchema);