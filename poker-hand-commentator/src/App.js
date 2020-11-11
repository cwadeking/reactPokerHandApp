
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
    return <TableTenPlayer />;
  }

  return (
    <div >
      <div><p></p></div>
      <center>
        {componentType}
      </center>
    </div>
  );
}

export default App;
