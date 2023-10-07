import { BsSortDownAlt } from "react-icons/bs";
import "./Sort.css"
function Sort (){
    return(
        <div className="sortdiv" >
        
           <h6>Sort</h6>
          <select className="form-select sort-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>Added Date</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
         
     
  <BsSortDownAlt className="sorticons"/>
            </div>
    )
}
export default Sort