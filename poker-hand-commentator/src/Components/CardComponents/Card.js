import React from 'react';
import './Card.css';
import clubImage from '../Images/club.png';
import spadeImage from '../Images/spade.png';
import diamondImage from '../Images/diamond.png';
import heartImage from '../Images/heart.png';

function Card(props){
    const cardInformation = props.name;
    var suitType = getSuitType(props.suitType);


    
    return(
        <div className = "SingleCard">
          <div className = "CardNumber">{cardInformation}<img id = "CardSuit" src = {suitType} alt = "Suit"></img></div>
        </div>
    )
}

function getSuitType(suitType){
    switch(suitType){
        case "clubs":
            return clubImage;
        case "spades":
            return spadeImage;
        case "hearts":
            return heartImage;
        case "diamonds":
            return diamondImage;
    }
}

export default Card;