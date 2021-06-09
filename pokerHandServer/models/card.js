const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    value: {type: String},
    suit: {type: String}
});

const Card = mongoose.model('Card', cardSchema); 
module.exports = Card;
module.exports.schema = cardSchema;