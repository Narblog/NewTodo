import {BsFillCalendarDateFill } from "react-icons/bs";
import "./Calendar.css"
function Calendar() {
    return (
      <div  className="Calendar">
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        <BsFillCalendarDateFill/>
  </button>
  
         
      </div>
    );
  }
  
  export default Calendar;