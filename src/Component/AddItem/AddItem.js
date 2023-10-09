import { BsFillCalendarDateFill } from "react-icons/bs";

import './AddItem.css';
import { useState } from "react";
import Calendar from "react-calendar";

function AddItem({ onAdd }) {
  const [text, setText] = useState("")

  const[isCalendar,setCalendar]=useState(false)

  return (
    <div className='Additem'>
      <div className="form-floating mt-5">
        <input
          type="text"
          value={text}
          className="form-control"
          id="floatingPassword"
          placeholder="Add Item..."
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
        <label >Add item</label>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        {
          isCalendar?<Calendar/> :(
            <button
            className="btn btn-primary me-md-2 buttonCalendar"
            type="button"    
            onClick={() => {
              setCalendar(true)
          }}
         
          >
            <BsFillCalendarDateFill />
          </button>
          )
        }
       

 
        <button onClick={(e) => {
          e.preventDefault();
          onAdd(text)
          setText("")
        }} className="btn btn-primary buttonAdd" type="button">Add</button></div>



    </div>
  );
}

export default AddItem;