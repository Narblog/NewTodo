import "./ItemsText.css"
import ItemsIcons from "../Component/ItemsIcons/ItemsIcons"
function ItemsText (){
    return(
        <div className="ItemsText">
            <div className="Iteminput">
                <div className="box">
                <input type="checkbox"/><p>Buy groceris for next Week </p> 
                </div>
                 <ItemsIcons /> </div>
                 <div className="Iteminput">
                <div className="box">
                <input type="checkbox"/><p>Renew car insurance </p> 
                </div>
                 <ItemsIcons /> </div>
                 <div className="Iteminput">
                <div className="box">
                <input type="checkbox"/><p>Sign up for online course </p> 
                </div>
                 <ItemsIcons /> </div>
          
        </div>
    )
}
export default ItemsText