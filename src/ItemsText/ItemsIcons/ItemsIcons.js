import { BsFillPencilFill,BsArchiveFill,BsFillInfoCircleFill } from "react-icons/bs";
import "./ItemsIcons.css"
function ItemsIcons (){
    return (
        <div className="iconitems">
           < BsFillPencilFill className="BsFillPencilFill"/>
           <BsArchiveFill className="BsArchiveFill"/>
         <div> <BsFillInfoCircleFill/> <data>28:01:2002</data></div>  
        </div>
    )
}
export default ItemsIcons