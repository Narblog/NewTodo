
import './AddItem.css';
import Calendar from "./Calendar";


function AddItem() {
  return (
    <div className='Additem'>
     <input type='text' className='inputAdd' placeholder='Add new...' />
           <Calendar/>
           <button className='button'>Add</button>
          
       
       
    </div>
  );
}

export default AddItem;