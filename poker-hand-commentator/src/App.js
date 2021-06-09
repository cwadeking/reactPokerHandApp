
import './App.css';
import Table from './Components/Table';
import TableThreePlayer from './Components/TableThreePlayer';
import TableFourPlayer from './Components/TableFourPlayer';
import TableFivePlayer from './Components/TableFivePlayer';
import TableSixPlayer from './Components/TableSixPlayer';
import TableSevenPlayer from './Components/TableSevenPlayer';
import TableEightPlayer from './Components/TableEightPlayer';
import TableNinePlayer from './Components/TableNinePlayer';
import TableTenPlayer from './Components/TableTenPlayer';
import Tile from './Components/Tile';

function App() {
  var componentType = testComponent();
  function testComponent(){
    let tableSize = prompt("How many players?");
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
      default:
        return testComponent();
    }
  }

  return (
    
    <div >
      <center>
        {componentType}
      </center>
    </div>
  );
}

export default App;
