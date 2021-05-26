const mongoose = require('mongoose');

const stepsSchema = new mongoose.Schema({
    position: String,
    action: String,
    amount: Number
})