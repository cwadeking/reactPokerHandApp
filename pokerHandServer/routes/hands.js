const Hand = require('../models/hand');
const Card = require('../models/card');
const Step = require('../models/step');
const express = require('express');
const Player = require('../models/player');
const router = express.Router();

router.post('/', async (req, res) => {
    console.log(req.body);
    try{
        const hand = new Hand({
            userId: "random string that will eventually be created by mongo",
            numberOfPlayers: 3,
            bigBlind: 100,                  
            preFlopAction:[
                new Step({
                   player: new Player({
                        position: "small blind",
                        cards: [
                            new Card({
                                value: "two",
                                suit: "spades"
                            }),new Card({
                                value: "seven",
                                suit: "hearts"
                            })],
                        stackSize: 5000,
                        numberOfBigBlinds: null,//this.stackSize/this.bigBlind,
                    }),
                    action: "post small blind",
                    amount: null,//.5 * this.bigBlind
                }),
                new Step({
                    player: new Player({
                         position: "big blind",
                         cards: [
                             new Card({
                                 value: "two",
                                 suit: "spades"
                             }),new Card({
                                 value: "seven",
                                 suit: "hearts"
                             })],
                        stackSize: 5000,
                        numberOfBigBlinds: null,//this.stackSize/this.bigBlind,
                     }),
                     action: "post big blind",
                     amount: null,//this.bigBlind
                 }),
                 new Step({
                    player: new Player({
                         position: "small blind",
                         cards: [
                             new Card({
                                 value: "two",
                                 suit: "spades"
                             }),new Card({
                                 value: "seven",
                                 suit: "hearts"
                             })],
                        stackSize: 5000,
                        numberOfBigBlinds: this.stackSize/this.bigBlind,
                     }),
                     action: "raise",
                     amount: 250
                 })
            ],
            flop: [
                new Card({
                    value: "two",
                    suit: "spades"
                }),
                new Card({
                    value: "seven",
                    suit: "hearts"
                }),
                new Card({
                    value: "two",
                    suit: "spades"
            })
            ],
            postFlopAction: null,
            turn: null,
            turnAction: null,
            river: null,
            riverAction: null
        })

        return res.send(hand);
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
})


module.exports = router;