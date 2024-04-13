import "./ItemGrid.css"
import ItemGridNav from "./ItemGridNav";
import ItemQuantity from "./ItemQuantity";
import ItemDisplay from "./ItemDisplay";

function ItemGrid() {
    return (
        <div className="gridContainer">
            <ItemGridNav/>
            <div className="selectItems">
                <ItemQuantity/>
                <ItemDisplay/>
            </div>
        </div>
    );
}

export default ItemGrid;
