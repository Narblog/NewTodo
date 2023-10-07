import DataTime from "../DataTime/DataTime"
import ItemsIcons from "../ItemsIcons/ItemsIcons"
import "./AddText.css"
function AddText (){
    return(
        <div className="addtext">
            <div>
            <div className="Iteminput">
                <div className="box">
                <input type="checkbox"/><p>Buy groceris for next Week </p> 
                </div>
                <div className="">
                    <ItemsIcons/>
                    <DataTime/>
                </div>

                </div>
            </div>
        </div>
    )
}
export default AddText