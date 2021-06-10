import React, {useState} from 'react';
import './App.css';
import Table from './Components/TableComponents/Table';
import TableThreePlayer from './Components/TableComponents/TableThreePlayer';
import TableFourPlayer from './Components/TableComponents/TableFourPlayer';
import TableFivePlayer from './Components/TableComponents/TableFivePlayer';
import TableSixPlayer from './Components/TableComponents/TableSixPlayer';
import TableSevenPlayer from './Components/TableComponents/TableSevenPlayer';
import TableEightPlayer from './Components/TableComponents/TableEightPlayer';
import TableNinePlayer from './Components/TableComponents/TableNinePlayer';
import TableTenPlayer from './Components/TableComponents/TableTenPlayer';


const App = (props) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(props.initialNumber);
  var componentType = setTableSize(numberOfPlayers);
  
  return (
    
    <div >
      <center>
        {componentType }
        <button onClick= {() => setNumberOfPlayers("2")}>2 players</button>
        <button onClick= {() => setNumberOfPlayers("3")}>3 players</button>
        <button onClick= {() => setNumberOfPlayers("4")}>4 players</button>
        <button onClick= {() => setNumberOfPlayers("5")}>5 players</button>
        <button onClick= {() => setNumberOfPlayers("6")}>6 players</button>
        <button onClick= {() => setNumberOfPlayers("7")}>7 players</button>
        <button onClick= {() => setNumberOfPlayers("8")}>8 players</button>
        <button onClick= {() => setNumberOfPlayers("9")}>9 players</button>
        <button onClick= {() => setNumberOfPlayers("10")}>10 players</button>
      </center>
    </div>
  );
}
function setTableSize(tableSize){
  switch(tableSize){
    case "2":
      return <Table />;
    case "3":
      return <TableThreePlayer />;
    case "4":
      return <TableFourPlayer />;          
    case "5":
      return <TableFivePlayer />;            
    case "6":
      return <TableSixPlayer />;              
    case "7":
      return <TableSevenPlayer />;
    case "8":
      return <TableEightPlayer />;
    case "9":
      return <TableNinePlayer />;
    case "10":
      return <TableTenPlayer />;
  }
}

export default App;
