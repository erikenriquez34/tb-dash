import "./ItemGrid.css"
import Item from "./Item"

function ItemDisplay() {
    return (
        <div className="itemDisplay">
            <Item imageName={"crunchyTaco"} name={"Crunchy Taco"}/>
            <Item imageName={"softTaco"} name={"Soft Taco"}/>
            <Item imageName={"chalupaSupreme"} name={"Chalupa Supreme"}/>
        </div>
    );
}

export default ItemDisplay;
