const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    between: [],

}, {timestamps: true});