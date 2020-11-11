import './Table.css';
import Tile from './Tile';
import PokerChip from './Images/pokerCoaching.png';
import Card from './Card';

function TableThreePlayer(props){
    return(
        <div className = "TableOutline">
            <div className = "PlayerTile-Top-Center">    
                <Tile />
            </div>
            <div className = "PlayerTile-Left-Center">
                <Tile />
            </div>
                <div id = "logo">
                    <img id = 'pokerChip' alt = 'pokerChip' src = {PokerChip}></img>
                </div>
                
                <div className = "CardBracket">
                    <div className = "CardRow">
                        <div className = "CardBracket-Column">
                            <Card name = "4" suitType = "spades"/>
                        </div>    
                        <div className = "CardBracket-Column">   
                            <Card name = "4" suitType = "spades"/>
                        </div>
                        <div className = "CardBracket-Column">
                            <Card name = "4" suitType = "spades"/>
                        </div>    
                        <div className = "CardBracket-Column">   
                            <Card name = "4" suitType = "spades"/>
                        </div>
                        <div className = "CardBracket-Column">
                            <Card name = "4" suitType = "spades"/>
                        </div>
                    </div>    
                </div>
            <div className = "PlayerTile-Bottom-Center">    
                <Tile />
            </div>
        </div>
    )
}

export default TableThreePlayer;