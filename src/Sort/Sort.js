import {BsSortDown} from "react-icons/bs";
import "./Sort.css"
function Sort (){
    return(
        <div className="sort">
        <label  for="All">Filter</label>
<select className="filterall" id="All" name="carlist" form="carform">
  <option value="volvo">All</option>
</select>
<label for="cars">Sort</label>
<select className="filteradd" id="cars" name="carlist" form="carform">
  <option value="volvo">Added date</option>
</select>
<BsSortDown className="Icons"/>
            </div>
    )
}
export default Sort