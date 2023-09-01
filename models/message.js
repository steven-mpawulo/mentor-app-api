const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    sender: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    receiver: {
        type: mongoose.Types.ObjectId,
        required: true,
    }
}, {timestamps: true});

module.exports = mongoose.model('message', messageSchema);