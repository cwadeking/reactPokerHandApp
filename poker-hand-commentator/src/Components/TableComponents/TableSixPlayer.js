import './Table.css';
import Tile from '../TileComponents/Tile';
import PokerChip from '../Images/pokerCoaching.png';
import Card from '../CardComponents/Card';

function TableSixPlayer(props){
    return(
        <div className = "TableOutline">
            <div className = "PlayerTile-Top-Center">    
                <Tile />
            </div>
            <div className = "PlayerTile-Left-Center">
                <Tile />
            </div>
            <div className = "PlayerTile-Right-Center">
                <Tile />
            </div>
            <div className = "PlayerTile-Top-Left">
                <Tile />
            </div>
            <div className = "PlayerTile-Top-Right">
                <Tile />
            </div>
                <div id = "logo">
                    <img id = 'pokerChip' alt = 'pokerChip' src = {PokerChip}></img>
                </div>
                
                <div className = "CardBracket">
                    <div className = "CardRow">
                    <div className = "CardBracket-Column">
                            <Card name ={props.flopCardOneValue}suitType = {props.flopCardOneSuitValue}/>
                        </div>    
                        <div className = "CardBracket-Column">   
                            <Card name = {props.flopCardTwoValue}suitType = {props.flopCardTwoSuitValue}/>
                        </div>
                        <div className = "CardBracket-Column">
                            <Card name ={props.flopCardThreeValue}suitType = {props.flopCardThreeSuitValue}/>
                        </div>    
                        <div className = "CardBracket-Column">   
                            <Card name = {props.turnCardValue}suitType = {props.turnCardSuitValue}/>
                        </div>
                        <div className = "CardBracket-Column">
                            <Card name = {props.riverCardValue}suitType = {props.riverCardSuitValue}/>
                        </div>
                    </div>    
                </div>
            <div className = "PlayerTile-Bottom-Center">    
                <Tile />
            </div>
        </div>
    )
}

export default TableSixPlayer;