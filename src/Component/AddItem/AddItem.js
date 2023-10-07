import {BsFillCalendarDateFill } from "react-icons/bs";

import './AddItem.css';
function AddItem() {
  return (
    <div className='Additem'>
   <div class="form-floating mt-5">
  <input type="text" class="form-control" id="floatingPassword" placeholder="Add Item..."/>
  <label for="floatingPassword">Add item</label>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button className="btn btn-primary me-md-2 buttonCalendar" type="button"><BsFillCalendarDateFill/></button>
  <button className="btn btn-primary buttonAdd" type="button">Add</button></div>
          
       
       
    </div>
  );
}

export default AddItem;