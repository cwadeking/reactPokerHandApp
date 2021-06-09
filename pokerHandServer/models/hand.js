const mongoose = require('mongoose');
const Card = require('./card');
const Step = require('./step');

const handSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    numberOfPlayers: {type: Number, required: true},
    bigBlind:{type: Number},
    preFlopAction: {type: [Step.schema]},//array of steps
    flop: {type: [Card.schema]},//array of cards
    postFlopAction: {type: [Step.schema]},//array of steps
    turn: Card.schema,
    turnAction:{type: [Step.schema]},//array of steps
    river: Card.schema,
    riverAction: {type: [Step.schema]}
});

const Hand = mongoose.model('Hand', handSchema);
module.exports = Hand;