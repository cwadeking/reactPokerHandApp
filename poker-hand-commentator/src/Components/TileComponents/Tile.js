import React from 'react';
import Card from '../CardComponents/Card';
import './Tile.css';

function Tile(props){
    return(
        <div className = "PlayerTile">
            <div className = "PlayerTile-TwoCards">
                <div className = "CardColumn">
                    <Card name = {props.cardValue} suitType = {props.suitValue}/>
                </div>    
                <div className = "CardColumn">   
                    <Card name = {props.cardValue} suitType = {props.suitValue}/>
                </div>
            </div>
            <div className = "PlayerTile-PlayerInfo">
                <div className = "PlayerTile-PlayerName">
                    <p>Player: {props.playerName}</p>
                </div>
                <div className = "PlayerTile-PlayerPosition">
                    <p>Position: {props.position}</p>
                </div>
            </div>
        </div>
    )
}

export default Tile;