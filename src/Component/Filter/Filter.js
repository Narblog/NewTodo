import "./Filter.css"
function Filter(){
    return(
        <div className="sortdiv" >
           <h6>Filter</h6>
          <select className="form-select sort-select" defaultValue={'DEFAULT'}  id="floatingSelect" aria-label="Floating label select example">
    <option value="DEFAULT" disabled>All</option>
  </select>
            </div>
    )
}
export default Filter