
import './App.css';
import Table from './Components/Table';
import Tile from './Components/Tile';

function App() {
  var componentType = testComponent();
  function testComponent(){
    return <Table />;
  }

  return (
    <div >
      <div><p></p></div>
      <center>
        {componentType}
        {/* <Tile playerName = "Teddy KGB" position = "Button"/>       */}
      </center>
    </div>
  );
}

export default App;
