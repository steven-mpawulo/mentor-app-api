const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    between: [],

}, {timestamps: true});


module.exports = mongoose.model('matche', matchSchema );