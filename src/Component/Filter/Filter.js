import "./Filter.css"
function Filter(){
    return(
        <div className="sortdiv" >
        
           <h6>Filter</h6>
          <select className="form-select sort-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>All</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
         
     
       
            </div>
    )
}
export default Filter