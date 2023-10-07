
import AddItem from '../AddItem';
import './App.css';
import { BsFillCheckSquareFill } from "react-icons/bs";
import Sort from '../Sort';
import Filter from '../Filter';
import AddText from '../AddText';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1 className='header'> <BsFillCheckSquareFill/> My Todo-s</h1>
    <AddItem/>
   <div className='line'></div>
    <Sort/>
    <Filter/>
    <AddText/>
      </div>
    
   
    </div>
   
  );
}

export default App;
