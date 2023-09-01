const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    between: [{ type: mongoose.Types.ObjectId, ref: 'mentor' }, { type: mongoose.Types.ObjectId, ref: 'mentee' }],

}, { timestamps: true });


module.exports = mongoose.model('matche', matchSchema);