
import AddItem from '../AddItem';
import './App.css';
import { BsFillCheckSquareFill } from "react-icons/bs";
import Sort from '../Sort';
import ItemsText from '../ItemsText';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1 className='header'> <BsFillCheckSquareFill/> My Todo-s</h1>
    <AddItem/>
    <hr className='Apphr'/>
    <Sort/>
    <ItemsText/>
      </div>
    
   
    </div>
   
  );
}

export default App;
