const mongoose = require('mongoose');
const Card = require('./card');

const playerSchema = new mongoose.Schema({
    position: {type: String},
    cards: [],
    stackSize: {type: Number, required: false},
    numberOfBigBlinds:{type: Number}
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
module.exports.schema = playerSchema;