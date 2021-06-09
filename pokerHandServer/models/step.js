const mongoose = require('mongoose');
const Player = require('./player');

const stepSchema = new mongoose.Schema({
    player: Player.schema,
    action: {type: String, required: true, minlength: 4, maxLength: 10},
    amount: {type: Number, required: true}
});

const Step = mongoose.model('Step', stepSchema);
module.exports = Step;
module.exports.schema = stepSchema;