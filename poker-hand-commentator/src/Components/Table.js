import './Table.css';
import Tile from './Tile';
import PokerChip from './Images/pokerCoaching.png';

function Table(props){
    return(
        <div className = "TableOutline">
            <br></br><br></br><br></br><br></br><br></br>
            <img id = 'pokerChip' alt = 'pokerChip' src = {PokerChip}></img>
            <br></br><br></br><br></br><br></br><br></br>
            <div className = "CardBracket">

            </div>
        </div>
    )
}

export default Table;