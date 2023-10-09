import { BsSortDownAlt } from "react-icons/bs";
import "./Sort.css"
function Sort (){
    return(
        <div className="sortdiv" >
        
        <h6>Sort</h6>
          <select className="form-select sort-select" defaultValue={'DEFAULT'} id="floatingSelect" aria-label="Floating label select example">
    <option value="DEFAULT" disabled>Added Date</option>
    <option value="5">Data</option>
   
  </select>
         
     
         
     
  <BsSortDownAlt className="sorticons"/>
            </div>
    )
}
export default Sort